/* phần phân trang */
const menuItems = document.querySelectorAll(".menu-item");
const pagination = document.getElementById("pagination");

const itemsPerPage = 8;
let currentPage = 1;

const totalPages = Math.ceil(menuItems.length / itemsPerPage);

function showPage(page) {
    currentPage = page;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    menuItems.forEach((item, index) => {
        if (index >= start && index < end) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });

    createPagination();
}

function createPagination() {
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");

        button.textContent = i;

        if (i === currentPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", function () {
            showPage(i);
        });

        pagination.appendChild(button);
    }
}

if (totalPages > 0) {
    showPage(1);
}
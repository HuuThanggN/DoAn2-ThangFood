const searchInput = document.getElementById("searchInput");
const menuItems = document.querySelectorAll(".menu-item");

searchInput.addEventListener("input", function () {

    const keyword = searchInput.value
        .toLowerCase()
        .trim();

    menuItems.forEach(function (item) {

        const name = item
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

});
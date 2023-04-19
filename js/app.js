// AOS.init(
//     {
//     disable: function () {
//         var maxwidth = 768;
//         return window.innerWidth < maxwidth;
//     }
//     }
// );

AOS.init();
let nav_links = document.querySelector("#nav-links");
let menu_checkbox = document.querySelector("#menu-checkbox");

menu_checkbox.addEventListener("click", function () {
    if (menu_checkbox.checked) {
        nav_links.classList.add("open_link");
    }
    else {
        nav_links.classList.remove("open_link");

    }
}
)

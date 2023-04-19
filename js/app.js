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


// product page

let cans = document.querySelectorAll(".can-container");

cans.forEach(ele => {
    ele.addEventListener("click", function () {
        openDetailModal(ele.id);

    });
});

let detail_modal = document.querySelector("#pepsi-detail");

let detail_title = detail_modal.children[1].children[0];
let detail_image = detail_modal.children[2].children[0];

let can_title, can_image;

function openDetailModal(id) {
    let ele = document.querySelector("#" + id);
    can_title = ele.children[1].innerHTML;
    can_image_link = ele.children[0].getAttribute("src");

    detail_title.innerText = can_title;
    detail_image.setAttribute("src", can_image_link);

    detail_modal.setAttribute("style", "display:flex;")
}


let modal_close = document.querySelector("#modal-close");

modal_close.addEventListener("click", function () {
    detail_modal.setAttribute("style", "display:none;")

});



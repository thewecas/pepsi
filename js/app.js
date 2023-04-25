AOS.init();

//index.html

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




// product.html to checkout.html

function setColdDrinkDetails(id) {
    let ele = document.getElementById(id);
    let drink_name = ele.children[1].innerHTML;
    let drink_src = ele.children[0].getAttribute("src");
    localStorage.setItem("drink_name", drink_name);
    localStorage.setItem("drink_src", drink_src);
    console.log(pepsi);
}


function getColdDrinkDetail() {
    let drink_name = localStorage.getItem("drink_name");
    let drink_src = localStorage.getItem("drink_src");
    console.log(drink_name);
    document.getElementById("cold-drink-name").innerText = drink_name;
    document.getElementById("cold-drink-image").setAttribute("src", drink_src);
}


//checkout.html
let quantity = document.getElementById("cold-drink-quantity");
function setQuantity(id) {
    if (id == "desc") {
        quantity.value = parseInt(quantity.value) == 1 ? 1 : parseInt(quantity.value) - 1;
    }
    else {
        quantity.value = parseInt(quantity.value) + 1;
    }

}
// header
// Scroll
$(window).scroll(function() {
    let windowScroll = $(window).scrollTop()
    if(windowScroll > 115)
    {
         $("#header").addClass("header_2 fadeInDown")
         $("#scroll_top").addClass("active")
    }
    else
    {
        $("#header").removeClass("header_2 fadeInDown")
        $("#scroll_top").removeClass("active")
    }
});
$("#scroll_top").click(function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})
// User Menu
let userMenu = document.getElementById("user-menu")
userMenu.addEventListener("click" , openMenuLoin)
function openMenuLoin(){
    let userLinks = document.getElementById("user-links")
    userLinks.classList.toggle("active")
}
// Setting
let settingManu = document.getElementById("setting-manu")
settingManu.addEventListener("click" , openSetting)
function openSetting(){
    let openBar = document.getElementById("action-bar")
    openBar.classList.toggle("active")
}
// Bag
let bag = document.getElementById("bag")
let bagClose = document.getElementById("close-bag")
let bagMenu = document.getElementById("bag-menu")
bag.addEventListener("click" , openBag)
function openBag(){
    bagMenu.classList.add("active")
}
bagClose.addEventListener("click" , closeBag)
function closeBag(){
    bagMenu.classList.remove("active")
}
// Page Search
let openPage = document.getElementById("open-page")
let pageSearch = document.getElementById("page-search")
let closePage = document.getElementById("close-page")
openPage.addEventListener("click" , openPageSearch) 
function openPageSearch(){
    pageSearch.classList.add("active")
}
closePage.addEventListener("click" , closePageSearch)
function closePageSearch(){
    pageSearch.classList.remove("active")
}
// Menu Responsive
let openMenu = document.getElementById("open-menu")
let closeMenu = document.getElementById("close-menu")
let menu = document.getElementById("menu")
openMenu.addEventListener("click", menuOpen)
function menuOpen(){
    menu.classList.add("active")
}
closeMenu.addEventListener("click", menuClose)
function menuClose(){
    menu.classList.remove("active")
}
// Home Menu
$("#home").click(function(){
    $("#menuHome").slideToggle(400)
    let openMenu = document.getElementById("home")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".home #itemHome-1").click(function(){
    $(".mob_nav .home .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemHome-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".home #itemHome-2").click(function(){
    $(".mob_nav .home .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemHome-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".home #itemHome-3").click(function(){
    $(".mob_nav .home .item-3").slideToggle(400)
    let itemMenu = document.getElementById("itemHome-3")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Shop Menu 
$("#shop").click(function(){
    $("#menuShop").slideToggle(400)
    let openMenu = document.getElementById("shop")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".shop #itemShop-1").click(function(){
    $(".mob_nav .shop .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemShop-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".shop #itemShop-2").click(function(){
    $(".mob_nav .shop .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemShop-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".shop #itemShop-3").click(function(){
    $(".mob_nav .shop .item-3").slideToggle(400)
    let itemMenu = document.getElementById("itemShop-3")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Product Menu 
$("#product").click(function(){
    $("#menuProduct").slideToggle(400)
    let openMenu = document.getElementById("product")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-1").click(function(){
    $(".mob_nav .product .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-2").click(function(){
    $(".mob_nav .product .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-3").click(function(){
    $(".mob_nav .product .item-3").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-3")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-4").click(function(){
    $(".mob_nav .product .item-4").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-4")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Page Menu
$("#page").click(function(){
    $("#menuPage").slideToggle(400)
    let openMenu = document.getElementById("page")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".page #itemPage-1").click(function(){
    $(".mob_nav .page .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemPage-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".page #itemPage-2").click(function(){
    $(".mob_nav .page .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemPage-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Blog Menu
$("#blog").click(function(){
    $("#menuBlog").slideToggle(400)
    let openMenu = document.getElementById("blog")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
// header
// display Add to Cart
let cartProducts = JSON.parse(localStorage.getItem('productsInCart'))
let cartList = document.querySelector('.mini_pr_list')
let empty = document.querySelector('.empty')
let productPrice = document.querySelector('.product-price')
let lodeing = document.querySelector('.lodeing')
let cart_btns = document.querySelector('.cart_btns')
if(cartProducts && cartProducts.length !== 0){
    empty.style.display = 'none'
    cart_btns.style.display = 'block'
    cartProducts.map(item => {
        cartList.innerHTML += `
        <li class="d-flex align-items-center">
        <a href="cartDetails.html" class="pr_image">
            <img src="${item.cartImg}" alt="" class="img-fluid">
        </a>
        <div class="pr_details">
            <a href="cartDetails.html" class="pr_name">${item.name}</a>
            <div class="d-flex justify-content-between w-100">
                <div>
                    <div class="pr_vr">${item.color}</div>
                    <div class="pr_price_rw">
                        <span class="product-price">$${item.price}.00</span>
                    </div>
                </div>
                <div class="text-center">
                    <div class="qtyField sm" title="Quantity">
                        <a class="qtyBtn" onclick="minusSm(${item.id})"><i class="fa-solid fa-minus"></i></a>
                        <span class="qtyBtn" id="qtysm">${item.qty}</span>
                        <a class="qtyBtn" onclick="plusSm(${item.id})"><i class="fa-solid fa-plus"></i></a>
                    </div>
                    <a class="remove" onclick="removeCart(${item.id})">Remove</a>
                </div>
            </div>
        </div>
        </li>
        `
})
}
function minusSm(id){
    let product =  cartProducts.find(item => item.id == id)
    let productQty = product.qty
    productQty--
    product.qty = productQty
    localStorage.setItem('productsInCart' , JSON.stringify(cartProducts))
    lodeing.classList.remove('hide')
    setTimeout(() => {
        lodeing.classList.add('hide')
        location.reload()
    }, 1000)
}
function plusSm(id){
    let product =  cartProducts.find(item => item.id == id)
    let productQty = product.qty
    productQty++
    product.qty = productQty
    localStorage.setItem('productsInCart' , JSON.stringify(cartProducts))
    lodeing.classList.remove('hide')
    setTimeout(() => {
        lodeing.classList.add('hide')
        location.reload()
    }, 1000)
}
function removeCart(id) {
    let removeProduct = cartProducts.filter(item => item.id !== id)
    localStorage.setItem('productsInCart' , JSON.stringify(removeProduct))
    lodeing.classList.remove('hide')
    setTimeout(() => {
        lodeing.classList.add('hide')
        location.reload()
    }, 1000)
} 
let badge = document.querySelectorAll('#badge')
let totalQty = 0
let totalPrice = 0
let total = 0
if(cartProducts){
    cartProducts.map(item => {
        totalQty += Number(item.qty)
        badge.forEach(item => item.innerHTML = totalQty)
    })
    cartProducts.map(item => {
        totalQty =  Number(item.qty)
        if(item.qty <= 0) {
            removeCart(item.id);
        }
        totalPrice = Number(item.price)
        total += totalPrice * totalQty
        productPrice.innerHTML = '$' + total + '.00'
    })
}

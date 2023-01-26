
// main
// section 1
// Carouse
$('#carousel1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplayTimeout:8000,
    smartSpeed:1000,
    autoplay:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// section 1
// section 2
let products = JSON.parse(localStorage.getItem('products')) || productsDB
let displayProducts;
(displayProducts = function(products){
    let productsUI = products.map(item => {
        return `
        <div class="col-md-3">
        <div class="grid grid-${item.id}">
            <div class="grid_img_wr">
                <a href='cartDetails.html' onclick="saveItemData(${item.id})" class="grid_link" id="">
                    <div class="grid_img primary" style="background-image:url(${item.imgUrl})"></div>
                    <div class="grid_img hover" style="background-image:url(${item.imgHover})"></div>
                    <div class="grid_img variantImg"></div>
                </a>
                <div class="button-set">
                    <a href="#" class="btn">
                        <i class="fa-regular fa-heart"></i>
                        <span>Wishlist</span>
                    </a>
                    <a class="btn" onclick="openShopMenu(${item.id})">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Quick Shop</span>
                    </a>
                    <a href="#" class="btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span>Quick View</span>
                    </a>
                </div>
            </div>
            <div class="details">
                <div class="grid_title">
                    <a href='cartDetails.html' onclick="saveItemData(${item.id})">${item.name}</a>
                </div>
                <div class="grid_meta">
                    <span>$${item.price}.00</span>
                </div>
                <div class="pr_review">
                    <span>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
                <ul class="grswatches">${item.lis}</ul>
            </div>
            <div class="quick_shop">
                
            </div>
        </div>
    </div>
        `
    })
    document.getElementById('displayProducts').innerHTML = productsUI.join('')
})(products)
// Grid 1
function saveItemData(id) {
    localStorage.setItem('productId' , id)
}
// swatchInput.forEach(item => {
//         item.addEventListener('click' , () => {
//             imgCart = item.dataset.img;
//             slVariant.innerHTML = item.value
//             swatchInput.forEach(item => item.checked = false)
//             item.checked = true
//             console.log(imgCart);
//     })
let quick_shop = document.querySelectorAll('.quick_shop')
function openShopMenu(id){
    quick_shop.forEach(item => {
        item.classList.remove('active')
        item.innerHTML = ""
    })
    quick_shop[id - 1].classList.add('active')
    let productShop = products.find(item => item.id === id)
    quick_shop[id - 1].innerHTML = `
        <div class="w-100">
        <a class="closeShop" href="javascript:;"><i class="fa-solid fa-xmark"></i></a>
        <div class="product-single">
            <p><span>$${productShop.price}.00</span></p>
            <form novalidate id="product_form">
                <div class="product-form">
                    <div class="swatch">
                        <div class="pr_form_item">
                            <label class="header-form">Color: <span class="slVariant"></span></label>
                            ${productShop.inputs}
                        </div>
                    </div>
                </div>
                <button type="submit" id="AddToCart" class="btn quickshop-cart"><span id="AddToCartText">Add to cart</span></button>
            </form>
        </div>
        </div>
    `
    let closeShop = document.querySelector('.closeShop')
    closeShop.addEventListener('click' , () => {
        quick_shop.forEach(i => {
            i.classList.remove('active')
            i.innerHTML = ""
        })
    })
    let slVariant = document.querySelector('.slVariant')
    let swatchInput = document.querySelectorAll('.swatchInput')
    let firstInput = swatchInput[0]
    let imgCart = firstInput.dataset.img
    firstInput.checked = true
    slVariant.innerHTML = firstInput.value
    swatchInput.forEach(item => {
        item.addEventListener('click' , () => {
            swatchInput.forEach(item => item.checked = false)
            item.checked = true
            slVariant.innerHTML = item.value
            imgCart = item.dataset.img;
            console.log(imgCart);
        })
    })
    let addedItem = 
    localStorage.getItem('productsInCart') ? 
    JSON.parse(localStorage.getItem('productsInCart')) : []
    let AddToCart = document.getElementById('AddToCart')
    AddToCart.addEventListener('click' , (e) => {
        e.preventDefault()
        let myCart = {
            id:Math.random(10),
            name:productShop.name,
            qty:1,
            price:productShop.price,
            cartImg:imgCart,
            color:slVariant.textContent
        }
        let isProductInCart = addedItem.some(item => item.color === myCart.color)
        console.log(isProductInCart);
        if(isProductInCart) {
            addedItem = addedItem.map(color => {
                if(color.color == myCart.color){
                    let quantity = Number(color.qty)
                    quantity += Number(myCart.qty)
                    color.qty = quantity
                } ;
                return color;
            })
        } else {
            addedItem.push(myCart)
        }
        localStorage.setItem('productsInCart' , JSON.stringify(addedItem))
        lodeing.classList.remove('hide')
        setTimeout(() => {
            lodeing.classList.add('hide')
            location.reload()
        }, 1000)
    })
    let productsInCart = JSON.parse(localStorage.getItem('productsInCart'))
    if(productsInCart && productsInCart.length !== 0){
        let bagMenu = document.querySelector('.bag-menu')
        setTimeout(() => bagMenu.classList.add('active') , 800)
    }
}

// main
// Footer 
$("#down_1").click(function(){
    $("#item-down_1").slideToggle(400)
    $("#icon-down_1").toggleClass("fa-chevron-down")
    $("#icon-down_1").toggleClass("fa-chevron-up")
})
$("#down_2").click(function(){
    $("#item-down_2").slideToggle(400)
    $("#icon-down_2").toggleClass("fa-chevron-down")
    $("#icon-down_2").toggleClass("fa-chevron-up")
})
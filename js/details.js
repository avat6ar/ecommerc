let productId = localStorage.getItem('productId')
let products = JSON.parse(localStorage.getItem('products')) || productsDB
let itemDom = document.getElementById('displayCart')
let itemImgs = document.getElementById('displayImgs')
let productsDetailsItem = products.find(item => item.id == productId)
let imgSrc = productsDetailsItem.imgArr
let currentSlideIndex = 0;
itemImgs.innerHTML = `
<div class="pr_lg_img">
<div class="primgSlider primgSlider-1">
${productsDetailsItem.imgs}
</div>
<div class="primgSlider primgSlider-2">
<button class="slick-prev fa-solid fa-chevron-left btn" onclick="slickPrev()">
</button>
<div class="slick-list draggable">
<div class="slick-current">
<span class="imgWrapper">
<img src="${imgSrc[0]}" id="slickImg" class="img-fluid" alt="">
</span>
</div>
</div>
<button class="slick-next fa-solid fa-chevron-right btn" onclick="slickNext()">
</button>
</div>
</div>
`
let btnPrev = document.querySelector('.slick-prev')
let btnNext = document.querySelector('.slick-next')
let slickImg = document.getElementById('slickImg')
btnPrev.style.opacity = .5
function slickNext() {
    currentSlideIndex++
    if(currentSlideIndex === imgSrc.length){
        currentSlideIndex = imgSrc.length -1
    }
    slickImg.src = imgSrc[currentSlideIndex]
    if(currentSlideIndex == imgSrc.length -1) {
        btnNext.style.opacity = .5
    } else {
        btnNext.style.opacity = 1
    }
    if( currentSlideIndex < 0 ){
        currentSlideIndex = 0
    }
    if( currentSlideIndex === 0 ) {
        btnPrev.style.opacity = .5
    } else {
        btnPrev.style.opacity = 1
    } 
}
function slickPrev() {
    currentSlideIndex--
    if(currentSlideIndex < 0) {
        currentSlideIndex = 0
    }
    slickImg.src = imgSrc[currentSlideIndex]
    if(currentSlideIndex === 0 ) {
        btnPrev.style.opacity = .5
    } else {
        btnPrev.style.opacity = 1
    } 
    if(currentSlideIndex == imgSrc.length -1) {
        btnNext.style.opacity = .5
    } else {
        btnNext.style.opacity = 1
    }
}
itemDom.innerHTML = `
<h1 class="pr_title">${productsDetailsItem.name}</h1>
<div class="mb25">
    <a>
        <span class="spr-badge-starrating">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </span>
        <span class="spr-badge-caption">No reviews</span>
    </a>
</div>
<div class="orderMsg mb25">
    <i class="fa-brands fa-gripfire"></i>
    <strong>12</strong>
    sold in last 
    <strong>24</strong>
    hours
</div>
<div class="pr_price_single d-flex flex-wrap align-items-center">
    <p class="d-flex align-items-center">
        <span class="pr_price">
            <span id="ProductPrice-template">$${productsDetailsItem.price}.00</span>
        </span>
    </p>
</div>
<form novalidate id="product_form">
    <div class="product-form">
        <div class="swatch">
            <div class="pr_form_item">
                ${productsDetailsItem.inputs.length > 0 ? '<label class="header-form">Color: <span class="slVariant"></span></label>' : ''} 
                ${productsDetailsItem.inputs}
            </div>
        </div>
    </div>
    <div class="d-flex align-items-center quantity-form">
        <div class="pr_form_item_qnty">
            <div class="qtyField" title="Quantity">
                <a class="qtyBtn minus"><i class="fa-solid fa-minus"></i></a>
                <input type="number" name="" id="quantity" class="pr_input qty form-control">
                <a class="qtyBtn plus"><i class="fa-solid fa-plus"></i></a>
            </div>
        </div>
    </div>
    <button type="submit" id="AddToCart" class="btn pr_btn"><span id="AddToCartText">Add to cart</span></button>
    <div class="shopify-payment-button">
        <div class="shopify-cleanslate">
            <button class="shopify-payment-button__button btn">Buy it now</button>
        </div>
    </div>
</form>
`

let prImgs = document.querySelectorAll('.pr_photo')
prImgs.forEach((item) => {
    let x,y,mWidth,mHeight;
                item.onmouseenter = () => {
                    const size = item.getBoundingClientRect()
                    x = size.x
                    y = size.y
                    mWidth = size.width
                    mHeight = size.height
                }
        item.addEventListener('mousemove' , (e) => {
                let horizontal = (e.clientX - x) / mWidth*100
                let vertical = (e.clientY - y) / mHeight*100
                item.style.setProperty('--x' , horizontal + '%')
                item.style.setProperty('--y' , vertical + '%')
        })
})
let imgCart = ""
let slVariant = document.querySelector('.slVariant')
if(productsDetailsItem.inputs !== ''){
    console.log("ava");
    let swatchInput = document.querySelectorAll('.swatchInput')
    let firstInput = swatchInput[0]
    imgCart = firstInput.dataset.img
    firstInput.checked = true 
    slVariant.innerHTML = firstInput.value
    swatchInput.forEach(item => {
        item.addEventListener('click' , () => {
            imgCart = item.dataset.img;
            slVariant.innerHTML = item.value
            swatchInput.forEach(item => item.checked = false)
            item.checked = true
        })
    })
}
let quantity = document.getElementById('quantity')
let quantityNumper = 1
quantity.value = quantityNumper

quantity.addEventListener('keyup' , (e) => {
        quantityNumper = Number(e.target.value)
})
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
plus.addEventListener('click' , () => {
    quantityNumper++
    quantity.value = quantityNumper
})
minus.addEventListener('click' , () => {
        quantityNumper--
        quantity.value = quantityNumper
})
let tablink = Array.from(document.querySelectorAll('.tablink'))
let tbCnt = Array.from(document.querySelectorAll('.tb_cnt'))
tbCnt[0].style.display = 'block'
tablink[0].addEventListener('click' , () =>{
        tablink[0].classList.add('active')
        tablink[1].classList.remove('active')
        tablink[2].classList.remove('active')
        tbCnt[0].style.display = 'block'
        tbCnt[1].style.display = 'none'
        tbCnt[2].style.display = 'none'
})
tablink[1].addEventListener('click' , () =>{
        tablink[1].classList.add('active')
        tablink[0].classList.remove('active')
        tablink[2].classList.remove('active')
        tbCnt[1].style.display = 'block'
        tbCnt[0].style.display = 'none'
        tbCnt[2].style.display = 'none'
})
tablink[2].addEventListener('click' , () =>{
        tablink[2].classList.add('active')
        tablink[1].classList.remove('active')
        tablink[0].classList.remove('active')
        tbCnt[2].style.display = 'block'
        tbCnt[1].style.display = 'none'
        tbCnt[0].style.display = 'none'
})
tablink[3].addEventListener('click' , () =>{
        tbCnt[0].style.display = 'block'
        tbCnt[1].style.display = 'none'
        tbCnt[2].style.display = 'none'
})
tablink[4].addEventListener('click' , () =>{
        tbCnt[1].style.display = 'block'
        tbCnt[0].style.display = 'none'
        tbCnt[2].style.display = 'none'
})
tablink[5].addEventListener('click' , () =>{
        tbCnt[2].style.display = 'block'
        tbCnt[1].style.display = 'none'
        tbCnt[0].style.display = 'none'
})
let addedItem = 
localStorage.getItem('productsInCart') ? 
JSON.parse(localStorage.getItem('productsInCart')) : []
let AddToCart = document.getElementById('AddToCart')
let buyNow = document.querySelector('.shopify-payment-button__button')
if(productsDetailsItem.sold === true){
    AddToCart.innerHTML = "Sold out"
    AddToCart.style.opacity = ".4"
    AddToCart.style.cursor = "default"
    buyNow.style.cursor = "default"
    buyNow.style.opacity = ".6"
}
AddToCart.addEventListener('click' , (e) => {
    e.preventDefault()
    if(productsDetailsItem.sold === true){
        return 
    } else {
        let myCart = {
            id:Math.random(10),
            name:productsDetailsItem.name,
            qty:quantity.value,
            price:productsDetailsItem.price,
            cartImg:productsDetailsItem.inputs == '' ? productsDetailsItem.imgArr[0] : 'img/' + imgCart ,
            color:productsDetailsItem.inputs !== '' ? slVariant.textContent : ''
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
    }
})
let productsInCart = JSON.parse(localStorage.getItem('productsInCart'))
if(productsInCart && productsInCart.length !== 0){
    let bagMenu = document.querySelector('.bag-menu')
    setTimeout(() => bagMenu.classList.add('active') , 800)
}

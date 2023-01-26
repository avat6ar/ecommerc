let productsDB = [
    {
        id: 1,
        name: 'Solid Color Pleated Tote Bag',
        price: 12,
        imgUrl: 'img/H061ecac8d27043779e961d036ec463e8M_350x.webp',
        qty:1,
        imgHover: 'img/Hcefa63e81aeb42a581c71b37d34919e12_350x.webp',
        lis: `<li class="swatch green" title="Green" style="background-image: url(img/Hcefa63e81aeb42a581c71b37d34919e12_80x.webp);">
                <span>Green</span>
                </li>
                <li class="swatch white" title="White" style="background-image: url(img/H061ecac8d27043779e961d036ec463e8M_af48da92-4207-43a1-9d75-fc7e9f64bdb9_80x.webp);">
                    <span>White</span>
                </li>
                <li class="swatch black" title="Black" style="background-image: url(img/Hf1e6872f1b8d48ceb201c5ab99726edf2_80x.webp);">
                    <span>Black</span>
                </li>
                <li class="swatch yellow" title="Yellow" style="background-image: url(img/H95a1240cb5c740eeaace6418ca49ec6ab_80x.webp);">
                    <span>Yellow</span>
                </li>
                <li class="swatch khaki" title="Khaki" style="background-image: url(img/H6b4e9d73b6eb44d1876197db9e984011Q_80x.webp);">
                    <span>Khaki</span>
                </li>
                <li class="swatch blue" title="Blue" style="background-image: url(img/Hf507b7345958422d9d8f8eca310fea33n_80x.webp);">
                    <span>Blue</span>
            </li>
         `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H061ecac8d27043779e961d036ec463e8M_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hcefa63e81aeb42a581c71b37d34919e12_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H061ecac8d27043779e961d036ec463e8M_af48da92-4207-43a1-9d75-fc7e9f64bdb9_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hf1e6872f1b8d48ceb201c5ab99726edf2_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H95a1240cb5c740eeaace6418ca49ec6ab_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H6b4e9d73b6eb44d1876197db9e984011Q_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hf507b7345958422d9d8f8eca310fea33n_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Green" name="" id="Green" class="d-none swatchInput" data-img="Hcefa63e81aeb42a581c71b37d34919e12_100x.webp">
            <label for="Green" class="swatchLbl" style="background-image: url(img/Hcefa63e81aeb42a581c71b37d34919e12_100x.webp);"></label>
            <span class="tooltip-label top">Green</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="White" name="" id="White" class="d-none swatchInput" data-img="H061ecac8d27043779e961d036ec463e8M_af48da92-4207-43a1-9d75-fc7e9f64bdb9_100x.webp">
            <label for="White" class="swatchLbl" style="background-image: url(img/H061ecac8d27043779e961d036ec463e8M_af48da92-4207-43a1-9d75-fc7e9f64bdb9_100x.webp);"></label>
            <span class="tooltip-label top">White</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="Black" class="d-none swatchInput" data-img="Hf1e6872f1b8d48ceb201c5ab99726edf2_100x.webp">
            <label for="Black" class="swatchLbl" style="background-image: url(img/Hf1e6872f1b8d48ceb201c5ab99726edf2_100x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Yellow" name="" id="Yellow" class="d-none swatchInput" data-img="H95a1240cb5c740eeaace6418ca49ec6ab_100x.webp">
            <label for="Yellow" class="swatchLbl" style="background-image: url(img/H95a1240cb5c740eeaace6418ca49ec6ab_100x.webp);"></label>
            <span class="tooltip-label top">Yellow</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Khaki" name="" id="Khaki" class="d-none swatchInput" data-img="H6b4e9d73b6eb44d1876197db9e984011Q_100x.webp">
            <label for="Khaki" class="swatchLbl" style="background-image: url(img/H6b4e9d73b6eb44d1876197db9e984011Q_100x.webp);"></label>
            <span class="tooltip-label top">Khaki</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Blue" name="" id="Blue" class="d-none swatchInput" data-img="Hf507b7345958422d9d8f8eca310fea33n_100x.webp">
            <label for="Blue" class="swatchLbl" style="background-image: url(img/Hf507b7345958422d9d8f8eca310fea33n_100x.webp);"></label>
            <span class="tooltip-label top">Blue</span>
        </div>
        `,
        imgArr: ['img/H061ecac8d27043779e961d036ec463e8M_1800x1800.webp' , 'img/Hcefa63e81aeb42a581c71b37d34919e12_1800x1800.webp' , 'img/H061ecac8d27043779e961d036ec463e8M_af48da92-4207-43a1-9d75-fc7e9f64bdb9_1800x1800.webp' ,
        'img/Hf1e6872f1b8d48ceb201c5ab99726edf2_1800x1800.webp' , 'img/H95a1240cb5c740eeaace6418ca49ec6ab_1800x1800.webp' , 'img/H6b4e9d73b6eb44d1876197db9e984011Q_1800x1800.webp' , 'img/Hf507b7345958422d9d8f8eca310fea33n_1800x1800.webp' ]
    },
    {
        id: 2,
        name: 'AND Shoulder Bag',
        price: 100,
        imgUrl: 'img/1_31d70db6-985f-4068-9999-d360835e059f_350x.webp',
        qty:1,
        imgHover: 'img/5_df537ecf-370b-4abb-bec3-29ef9537de8f_350x.webp',
        lis: `  <li class="swatch black" title="Black" style="background-image: url(img/1_31d70db6-985f-4068-9999-d360835e059f_80x.webp);">
                <span>Black</span>
                </li>
                <li class="swatch pink" title="Pink" style="background-image: url(img/5_df537ecf-370b-4abb-bec3-29ef9537de8f_80x.webp);">
                <span>Pink</span>
                </li>
    `,
        imgs:`
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/1_31d70db6-985f-4068-9999-d360835e059f_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/5_df537ecf-370b-4abb-bec3-29ef9537de8f_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/4_f3f2af04-1e0a-444d-9279-d120a8161739_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/2_08c5621a-d660-4879-a3aa-544aa44d40a2_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/3_2fe0eb5c-51a2-49ef-bcf6-2464445a9a3c_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="black" class="d-none swatchInput" data-img="1_31d70db6-985f-4068-9999-d360835e059f_350x.webp">
            <label for="black" class="swatchLbl" style="background-image: url(img/1_31d70db6-985f-4068-9999-d360835e059f_350x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Pink" name="" id="pink" class="d-none swatchInput" data-img="5_df537ecf-370b-4abb-bec3-29ef9537de8f_80x.webp">
            <label for="pink" class="swatchLbl " style="background-image: url(img/5_df537ecf-370b-4abb-bec3-29ef9537de8f_80x.webp);"></label>
            <span class="tooltip-label top">Pink</span>
        </div>
        `,
        imgArr: ['img/1_31d70db6-985f-4068-9999-d360835e059f_1800x1800.webp' , 'img/5_df537ecf-370b-4abb-bec3-29ef9537de8f_1800x1800.webp' , 'img/4_f3f2af04-1e0a-444d-9279-d120a8161739_1800x1800.webp' , 'img/2_08c5621a-d660-4879-a3aa-544aa44d40a2_1800x1800.webp',
        'img/3_2fe0eb5c-51a2-49ef-bcf6-2464445a9a3c_1800x1800.webp' ]
    },
    {
        id: 3,
        name: 'AND Shoulder Bag',
        price: 25,
        imgUrl: 'img/H1cb0f3a2fd8f41dda00c57a0f2667facQ_350x.webp',
        qty:1,
        imgHover: 'img/Hf892f837deba4801914710c05f79ea99R_350x.webp',
        lis: `  <li class="swatch green" title="Green" style="background-image: url(img/Hf892f837deba4801914710c05f79ea99R_80x.webp);">
                <span>Green</span>
                </li>
                <li class="swatch pink" title="Pink" style="background-image: url(img/Hb462be62c7e5443db951148b34d55bfcf_80x.webp);">
                    <span>Pink</span>
                </li>
                <li class="swatch white" title="White" style="background-image: url(img/H8db043acbc47429ea614bf7208a80b0bB_80x.webp);">
                    <span>White</span>
                </li>
                <li class="swatch red" title="Red" style="background-image: url(img/H76ceafb17b0b46678ba2a9216dd13707D_80x.webp);">
                    <span>Red</span>
                </li>
    `,
    imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H1cb0f3a2fd8f41dda00c57a0f2667facQ_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hf892f837deba4801914710c05f79ea99R_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hb462be62c7e5443db951148b34d55bfcf_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H8db043acbc47429ea614bf7208a80b0bB_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H76ceafb17b0b46678ba2a9216dd13707D_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hfb12cd9641e2417b949c9410a3beb64bD_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
            `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Green" name="" id="Green" class="d-none swatchInput" data-img="Hf892f837deba4801914710c05f79ea99R_100x.webp">
            <label for="Green" class="swatchLbl" style="background-image: url(img/Hf892f837deba4801914710c05f79ea99R_100x.webp);"></label>
            <span class="tooltip-label top">Green</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Pink" name="" id="Pink" class="d-none swatchInput" data-img="Hb462be62c7e5443db951148b34d55bfcf_100x.webp">
            <label for="Pink" class="swatchLbl" style="background-image: url(img/Hb462be62c7e5443db951148b34d55bfcf_100x.webp);"></label>
            <span class="tooltip-label top">Pink</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="White" name="" id="White" class="d-none swatchInput" data-img="H8db043acbc47429ea614bf7208a80b0bB_100x.webp">
            <label for="White" class="swatchLbl" style="background-image: url(img/H8db043acbc47429ea614bf7208a80b0bB_100x.webp);"></label>
            <span class="tooltip-label top">White</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Red" name="" id="Red" class="d-none swatchInput" data-img="H76ceafb17b0b46678ba2a9216dd13707D_100x.webp">
            <label for="Red" class="swatchLbl" style="background-image: url(img/H76ceafb17b0b46678ba2a9216dd13707D_100x.webp);"></label>
            <span class="tooltip-label top">Red</span>
        </div>
        `,
        imgArr: ['img/H1cb0f3a2fd8f41dda00c57a0f2667facQ_1800x1800.webp' , 'img/Hf892f837deba4801914710c05f79ea99R_1800x1800.webp' , 'img/Hb462be62c7e5443db951148b34d55bfcf_1800x1800.webp' , 'H8db043acbc47429ea614bf7208a80b0bB_1800x1800.webp' , 'H76ceafb17b0b46678ba2a9216dd13707D_1800x1800.webp' , 'Hfb12cd9641e2417b949c9410a3beb64bD_1800x1800.webp']
    },
    {
        id: 4,
        name: 'Thick Chain Purses',
        price: 10,
        imgUrl: 'img/H625460db963f4acc8992ee6f37d22a32m_ad6eda8f-3a67-42f1-b1a2-1967a0e1ba95_350x.jpg',
        qty:1,
        imgHover: '',
        lis: `  <li class="swatch white" title="White" style="background-image: url(img/H625460db963f4acc8992ee6f37d22a32m_80x.webp);">
                    <span>White</span>
                </li>
                <li class="swatch black" title="Black" style="background-image: url(img/H4a5a6050f0014554a573c8dd44843b2fr_80x.webp);">
                    <span>Black</span>
                </li>
                <li class="swatch green" title="Green" style="background-image: url(img/Hade85bcca3364ddaa2e4d939e651b7f1k_80x.webp);">
                    <span>Green</span>
                </li>
                <li class="swatch khaki" title="Khaki" style="background-image: url(img/H72985799a02142a181cb665ce08f793ed_80x.webp);">
                    <span>Khaki</span>
                </li>
        `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H625460db963f4acc8992ee6f37d22a32m_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H625460db963f4acc8992ee6f37d22a32m_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H981bca2cf3144cf28012d3c32ec26af8t_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H72985799a02142a181cb665ce08f793ed_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hade85bcca3364ddaa2e4d939e651b7f1k_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H4a5a6050f0014554a573c8dd44843b2fr_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="White" name="" id="White" class="d-none swatchInput" data-img="H625460db963f4acc8992ee6f37d22a32m_100x.webp">
            <label for="White" class="swatchLbl" style="background-image: url(img/H625460db963f4acc8992ee6f37d22a32m_100x.webp);"></label>
            <span class="tooltip-label top">White</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="Black" class="d-none swatchInput" data-img="H4a5a6050f0014554a573c8dd44843b2fr_100x.webp">
            <label for="Black" class="swatchLbl" style="background-image: url(img/H4a5a6050f0014554a573c8dd44843b2fr_100x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Green" name="" id="Green" class="d-none swatchInput" data-img="Hade85bcca3364ddaa2e4d939e651b7f1k_100x.webp">
            <label for="Green" class="swatchLbl" style="background-image: url(img/Hade85bcca3364ddaa2e4d939e651b7f1k_100x.webp);"></label>
            <span class="tooltip-label top">Green</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Khaki" name="" id="Khaki" class="d-none swatchInput" data-img="H72985799a02142a181cb665ce08f793ed_100x.avif">
            <label for="Khaki" class="swatchLbl" style="background-image: url(img/H72985799a02142a181cb665ce08f793ed_100x.avif);"></label>
            <span class="tooltip-label top">Khaki</span>
        </div>
        `,
        imgArr: ['img/H625460db963f4acc8992ee6f37d22a32m_1800x1800.jpg' , 'img/H981bca2cf3144cf28012d3c32ec26af8t_1800x1800.jpg' , 'img/H72985799a02142a181cb665ce08f793ed_1800x1800.webp' , 'img/Hade85bcca3364ddaa2e4d939e651b7f1k_1800x1800.webp' , 'img/H4a5a6050f0014554a573c8dd44843b2fr_1800x1800.webp']
    },
    {
        id: 5,
        name: 'PU Leather Crossbody Bags',
        price: 19,
        imgUrl: 'img/HTB1ANz9XHr1gK0jSZFDq6z9yVXaO_350x.jpg',
        qty:1,
        imgHover: 'img/HTB1XnD9XQL0gK0jSZFAq6AA9pXaT_350x.jpg',
        lis: `  <li class="swatch black" title="Black" style="background-image: url(img/HTB1jrj_XHj1gK0jSZFuq6ArHpXa6_80x.webp);">
                    <span>Black</span>
                </li>
                <li class="swatch blue" title="Blue" style="background-image: url(img/HTB1MBb9XO_1gK0jSZFqq6ApaXXaC_80x.webp);">
                    <span>Blue</span>
                </li>
                <li class="swatch yellow" title="Yellow" style="background-image: url(img/HTB1CD_8XKH2gK0jSZJnq6yT1FXax_80x.webp);">
                    <span>Yellow</span>
                </li>
        `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1ANz9XHr1gK0jSZFDq6z9yVXaO_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1XnD9XQL0gK0jSZFAq6AA9pXaT_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1jrj_XHj1gK0jSZFuq6ArHpXa6_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1MBb9XO_1gK0jSZFqq6ApaXXaC_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1CD_8XKH2gK0jSZJnq6yT1FXax_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="Black" class="d-none swatchInput" data-img="HTB1jrj_XHj1gK0jSZFuq6ArHpXa6_100x.webp">
            <label for="Black" class="swatchLbl" style="background-image: url(img/HTB1jrj_XHj1gK0jSZFuq6ArHpXa6_100x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Blue" name="" id="Blue" class="d-none swatchInput" data-img="HTB1MBb9XO_1gK0jSZFqq6ApaXXaC_100x.webp">
            <label for="Blue" class="swatchLbl" style="background-image: url(img/HTB1MBb9XO_1gK0jSZFqq6ApaXXaC_100x.webp);"></label>
            <span class="tooltip-label top">Blue</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Yellow" name="" id="Yellow" class="d-none swatchInput" data-img="HTB1CD_8XKH2gK0jSZJnq6yT1FXax_100x.webp">
            <label for="Yellow" class="swatchLbl" style="background-image: url(img/HTB1CD_8XKH2gK0jSZJnq6yT1FXax_100x.webp);"></label>
            <span class="tooltip-label top">Yellow</span>
        </div>
        `,
        imgArr: ['img/HTB1ANz9XHr1gK0jSZFDq6z9yVXaO_1800x1800.webp' , 'img/HTB1XnD9XQL0gK0jSZFAq6AA9pXaT_1800x1800.jpg' , 'img/HTB1jrj_XHj1gK0jSZFuq6ArHpXa6_1800x1800.jpg' , 'img/HTB1MBb9XO_1gK0jSZFqq6ApaXXaC_1800x1800.jpg' , 'img/HTB1CD_8XKH2gK0jSZJnq6yT1FXax_1800x1800.jpg']
    },
    {
        id: 6,
        name: 'Drawstring Bucket Bag',
        price: 28,
        imgUrl: 'img/H9e50214c3a5e48c08f47913951212c97a_350x.webp',
        qty:1,
        imgHover: '',
        lis: `  <li class="swatch pink" title="Pink" style="background-image: url(img/Ha65c4c31c49a4ab0bf5eb8c22b94b5e7d_80x.webp);">
                    <span>Pink</span>
                </li>
                <li class="swatch black" title="Black" style="background-image: url(img/H2ffc39cb58d84625a65c0263b8ad3ae1O_80x.webp);">
                    <span>Black</span>
                </li>
                <li class="swatch red" title="Red" style="background-image: url(img/H1c9dcfd4ab1c483e906850c92fedb45eo_80x.webp);">
                    <span>Red</span>
                </li>
        `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H9e50214c3a5e48c08f47913951212c97a_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H9e50214c3a5e48c08f47913951212c97a_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Ha65c4c31c49a4ab0bf5eb8c22b94b5e7d_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H2ffc39cb58d84625a65c0263b8ad3ae1O_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H1c9dcfd4ab1c483e906850c92fedb45eo_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Pink" name="" id="Pink" class="d-none swatchInput" data-img="Ha65c4c31c49a4ab0bf5eb8c22b94b5e7d_80x.webp">
            <label for="Pink" class="swatchLbl" style="background-image: url(img/Ha65c4c31c49a4ab0bf5eb8c22b94b5e7d_80x.webp);"></label>
            <span class="tooltip-label top">Pink</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="Black" class="d-none swatchInput" data-img="H2ffc39cb58d84625a65c0263b8ad3ae1O_80x.webp">
            <label for="Black" class="swatchLbl" style="background-image: url(img/H2ffc39cb58d84625a65c0263b8ad3ae1O_80x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Red" name="" id="Red" class="d-none swatchInput" data-img="H1c9dcfd4ab1c483e906850c92fedb45eo_80x.webp">
            <label for="Red" class="swatchLbl" style="background-image: url(img/H1c9dcfd4ab1c483e906850c92fedb45eo_80x.webp);"></label>
            <span class="tooltip-label top">Red</span>
        </div>
        `,
        imgArr: [ 'img/H9e50214c3a5e48c08f47913951212c97a_1800x1800.webp' , 'img/Ha65c4c31c49a4ab0bf5eb8c22b94b5e7d_1800x1800.webp' , 'img/H2ffc39cb58d84625a65c0263b8ad3ae1O_1800x1800.webp' , 'img/H1c9dcfd4ab1c483e906850c92fedb45eo_1800x1800.webp']
    },
    {
        id: 7,
        name: 'Box Bag Bucket Bag Wooden',
        price: 35,
        imgUrl: 'img/HTB1miS_cBiE3KVjSZFMq6zQhVXad_350x.webp',
        qty:1,
        imgHover: '',
        lis: `  <li class="swatch white" title="White" style="background-image: url(img/H224da54864c345ca8ab3f7ad7cf61ff86_80x.webp);">
                    <span>White</span>
                </li>
                <li class="swatch blue" title="Blue" style="background-image: url(img/H95f3cdb347fd4d76b0ff5a94d04cf3b4q_80x.webp);">
                    <span>Blue</span>
                </li>
                <li class="swatch black" title="Black" style="background-image: url(img/Hcc7b99fd35e44a0fad2cb875c90a3863Y_80x.webp);">
                    <span>Black</span>
                </li>
        `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1miS_cBiE3KVjSZFMq6zQhVXad_800x.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1miS_cBiE3KVjSZFMq6zQhVXad_800x.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hcc7b99fd35e44a0fad2cb875c90a3863Y_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H86bfeb919f0d45cdae3b8ab490b64bf8a_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H224da54864c345ca8ab3f7ad7cf61ff86_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H95f3cdb347fd4d76b0ff5a94d04cf3b4q_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="White" name="" id="White" class="d-none swatchInput" data-img="H224da54864c345ca8ab3f7ad7cf61ff86_80x.webp">
            <label for="White" class="swatchLbl" style="background-image: url(img/H224da54864c345ca8ab3f7ad7cf61ff86_80x.webp);"></label>
            <span class="tooltip-label top">White</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Blue" name="" id="Blue" class="d-none swatchInput" data-img="H95f3cdb347fd4d76b0ff5a94d04cf3b4q_80x.webp">
            <label for="Blue" class="swatchLbl" style="background-image: url(img/H95f3cdb347fd4d76b0ff5a94d04cf3b4q_80x.webp);"></label>
            <span class="tooltip-label top">Blue</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="Black" class="d-none swatchInput" data-img="Hcc7b99fd35e44a0fad2cb875c90a3863Y_80x.webp">
            <label for="Black" class="swatchLbl" style="background-image: url(img/Hcc7b99fd35e44a0fad2cb875c90a3863Y_80x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        `,
        imgArr: ['img/HTB1miS_cBiE3KVjSZFMq6zQhVXad_800x.webp' , 'img/Hcc7b99fd35e44a0fad2cb875c90a3863Y_1800x1800.webp' , 'img/H86bfeb919f0d45cdae3b8ab490b64bf8a_1800x1800.webp' , 'img/H224da54864c345ca8ab3f7ad7cf61ff86_1800x1800.webp' , 'img/H95f3cdb347fd4d76b0ff5a94d04cf3b4q_1800x1800.webp' ]
    },
    {
        id: 8,
        name: 'Crossbody Bag',
        price: 20,
        imgUrl: 'img/H969e4a749b364ad48e6ced7224526ad9L_350x.webp',
        qty:1,
        imgHover: '',
        lis: `  <li class="swatch black" title="Black" style="background-image: url(img/Ha63c8c02932a46178a97526736dd4d86b_80x.webp);">
                    <span>Black</span>
                </li>
                <li class="swatch grey" title="Grey" style="background-image: url(img/H539ea92796f743fea1d038566250bf3a6_80x.webp);">
                    <span>Grey</span>
                </li>
                <li class="swatch khaki" title="Khaki" style="background-image: url(img/H8e26bad13cdd48fea06971f582309e13j_80x.webp);">
                    <span>Khaki</span>
                </li>
                <li class="swatch white" title="White" style="background-image: url(img/H5af15a610efc4afb8d2406a12e3755aba_80x.webp);">
                    <span>White</span>
                </li>
                <li class="swatch brown" title="Brown" style="background-image: url(img/H2c27f76c490d4742b3a54046881ae1d81_80x.webp);">
                    <span>Brown</span>
                </li>
        `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H969e4a749b364ad48e6ced7224526ad9L_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H969e4a749b364ad48e6ced7224526ad9L_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H539ea92796f743fea1d038566250bf3a6_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H2c27f76c490d4742b3a54046881ae1d81_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H5af15a610efc4afb8d2406a12e3755aba_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Ha63c8c02932a46178a97526736dd4d86b_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="Black" class="d-none swatchInput" data-img="Ha63c8c02932a46178a97526736dd4d86b_80x.webp">
            <label for="Black" class="swatchLbl" style="background-image: url(img/Ha63c8c02932a46178a97526736dd4d86b_80x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Grey" name="" id="Grey" class="d-none swatchInput" data-img="H539ea92796f743fea1d038566250bf3a6_80x.webp">
            <label for="Grey" class="swatchLbl" style="background-image: url(img/H539ea92796f743fea1d038566250bf3a6_80x.webp);"></label>
            <span class="tooltip-label top">Grey</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Khaki" name="" id="Khaki" class="d-none swatchInput" data-img="H8e26bad13cdd48fea06971f582309e13j_80x.webp">
            <label for="Khaki" class="swatchLbl" style="background-image: url(img/H8e26bad13cdd48fea06971f582309e13j_80x.webp);"></label>
            <span class="tooltip-label top">Khaki</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="White" name="" id="White" class="d-none swatchInput" data-img="H5af15a610efc4afb8d2406a12e3755aba_80x.webp">
            <label for="White" class="swatchLbl" style="background-image: url(img/H5af15a610efc4afb8d2406a12e3755aba_80x.webp);"></label>
            <span class="tooltip-label top">White</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Brown" name="" id="Brown" class="d-none swatchInput" data-img="H2c27f76c490d4742b3a54046881ae1d81_80x.webp">
            <label for="Brown" class="swatchLbl" style="background-image: url(img/H2c27f76c490d4742b3a54046881ae1d81_80x.webp);"></label>
            <span class="tooltip-label top">Brown</span>
        </div>
        `,
        imgArr: ['img/H969e4a749b364ad48e6ced7224526ad9L_1800x1800.webp' , 'H539ea92796f743fea1d038566250bf3a6_1800x1800.jpg' , 'img/H2c27f76c490d4742b3a54046881ae1d81_1800x1800.jpg' , 'img/H5af15a610efc4afb8d2406a12e3755aba_1800x1800.jpg' , 'img/Ha63c8c02932a46178a97526736dd4d86b_1800x1800.webp']
    },
    {
        id: 9,
        name: 'Korean version of small square bag',
        price: 20,
        imgUrl: 'img/HTB1TPqoaV67gK0jSZPfq6yhhFXaa_350x.jpg',
        qty:1,
        imgHover: '',
        lis: `  
            <li class="swatch black" title="Black" style="background-image: url(img/HTB13Smra4n1gK0jSZKPq6xvUXXaO_80x.webp);">
                <span>Black</span>
            </li>
            <li class="swatch grey" title="Grey" style="background-image: url(img/HTB1bRqsa7L0gK0jSZFxq6xWHVXa4_80x.webp);">
                <span>Grey</span>
            </li>
            <li class="swatch brown" title="Brown" style="background-image: url(img/HTB11wWra.D1gK0jSZFGq6zd3FXaU_80x.webp);">
                <span>Brown</span>
            </li>
            <li class="swatch khaki" title="Khaki" style="background-image: url(img/HTB1pxWra1H2gK0jSZFEq6AqMpXaX_80x.webp);">
                <span>Khaki</span>
            </li>
            <li class="swatch white" title="White" style="background-image: url(img/HTB16F9ra7P2gK0jSZPxq6ycQpXaH_80x.webp);">
                <span>White</span>
            </li>
        `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1TPqoaV67gK0jSZPfq6yhhFXaa_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1TPqoaV67gK0jSZPfq6yhhFXaa_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB13Smra4n1gK0jSZKPq6xvUXXaO_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB16F9ra7P2gK0jSZPxq6ycQpXaH_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB11wWra.D1gK0jSZFGq6zd3FXaU_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1pxWra1H2gK0jSZFEq6AqMpXaX_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/HTB1bRqsa7L0gK0jSZFxq6xWHVXa4_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Black" name="" id="Black" class="d-none swatchInput" data-img="HTB13Smra4n1gK0jSZKPq6xvUXXaO_80x.webp">
            <label for="Black" class="swatchLbl" style="background-image: url(img/HTB13Smra4n1gK0jSZKPq6xvUXXaO_80x.webp);"></label>
            <span class="tooltip-label top">Black</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Grey" name="" id="Grey" class="d-none swatchInput" data-img="HTB1bRqsa7L0gK0jSZFxq6xWHVXa4_80x.webp">
            <label for="Grey" class="swatchLbl" style="background-image: url(img/HTB1bRqsa7L0gK0jSZFxq6xWHVXa4_80x.webp);"></label>
            <span class="tooltip-label top">Grey</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Brown" name="" id="Brown" class="d-none swatchInput" data-img="HTB11wWra.D1gK0jSZFGq6zd3FXaU_80x.webp">
            <label for="Brown" class="swatchLbl" style="background-image: url(img/HTB11wWra.D1gK0jSZFGq6zd3FXaU_80x.webp);"></label>
            <span class="tooltip-label top">Brown</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Khaki" name="" id="Khaki" class="d-none swatchInput" data-img="HTB1pxWra1H2gK0jSZFEq6AqMpXaX_80x.webp">
            <label for="Khaki" class="swatchLbl" style="background-image: url(img/HTB1pxWra1H2gK0jSZFEq6AqMpXaX_80x.webp);"></label>
            <span class="tooltip-label top">Khaki</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="White" name="" id="White" class="d-none swatchInput" data-img="HTB16F9ra7P2gK0jSZPxq6ycQpXaH_80x.webp">
            <label for="White" class="swatchLbl" style="background-image: url(img/HTB16F9ra7P2gK0jSZPxq6ycQpXaH_80x.webp);"></label>
            <span class="tooltip-label top">White</span>
        </div>
        `,
        imgArr: ['img/HTB1TPqoaV67gK0jSZPfq6yhhFXaa_1800x1800.jpg' , 'img/HTB13Smra4n1gK0jSZKPq6xvUXXaO_1800x1800.jpg' , 'img/HTB16F9ra7P2gK0jSZPxq6ycQpXaH_1800x1800.webp' , 'img/HTB11wWra.D1gK0jSZFGq6zd3FXaU_1800x1800.jpg']
    },
    {
        id: 10,
        name: 'Big BagLarge Tote Bags',
        price: 150,
        imgUrl: 'img/H85b463feff67435a9e3185a3cf1a238e8_350x.webp',
        qty:1,
        imgHover: 'img/H0264564b94ed444e9c675dfb27852fbcB.webp',
        lis: '',
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H85b463feff67435a9e3185a3cf1a238e8_350x.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H0264564b94ed444e9c675dfb27852fbcB.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: '',
        imgArr: ['img/H85b463feff67435a9e3185a3cf1a238e8_350x.webp' , 'img/H0264564b94ed444e9c675dfb27852fbcB.webp']
    },
    {
        id: 11,
        name: 'Korean version of small square bag',
        price: 20,
        imgUrl: 'img/H9f97da1089624cc6a17a70cc670560873_350x.webp',
        qty:1,
        imgHover: '',
        lis: `  <li class="swatch orange" title="Orange" style="background-image: url(img/Hc917acd85d7d49298ea9f52cafd2b98dO_80x.avif);">
                    <span>Orange</span>
                </li>
                <li class="swatch pink" title="Pink" style="background-image: url(img/Hc1b4243842854956a0046b18a6ea8f15U_80x.webp);">
                    <span>Pink</span>
                </li>
                <li class="swatch blue" title="Blue" style="background-image: url(img/H26408db61afc4fb1b22ea64ed030b0b6H_80x.avif);">
                    <span>Blue</span>
                </li>
        `,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H9f97da1089624cc6a17a70cc670560873_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H9f97da1089624cc6a17a70cc670560873_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H8442be7dbee449fdbedd7a345b7a36a7a_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H26408db61afc4fb1b22ea64ed030b0b6H_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hc917acd85d7d49298ea9f52cafd2b98dO_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H9c7c29fb8b464b5783d07a366876ad22O_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/H68ca828564524629896431cebbc6c278v_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/Hc1b4243842854956a0046b18a6ea8f15U_1800x1800.jpg" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: `
        <div class="swatch-element">
            <input type="radio" value="Orange" name="" id="Orange" class="d-none swatchInput" data-img="Hc917acd85d7d49298ea9f52cafd2b98dO_80x.avif">
            <label for="Orange" class="swatchLbl" style="background-image: url(img/Hc917acd85d7d49298ea9f52cafd2b98dO_80x.avif);"></label>
            <span class="tooltip-label top">Orange</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Pink" name="" id="Pink" class="d-none swatchInput" data-img="Hc1b4243842854956a0046b18a6ea8f15U_80x.webp">
            <label for="Pink" class="swatchLbl" style="background-image: url(img/Hc1b4243842854956a0046b18a6ea8f15U_80x.webp);"></label>
            <span class="tooltip-label top">Pink</span>
        </div>
        <div class="swatch-element">
            <input type="radio" value="Blue" name="" id="Blue" class="d-none swatchInput" data-img="H26408db61afc4fb1b22ea64ed030b0b6H_80x.avif">
            <label for="Blue" class="swatchLbl" style="background-image: url(img/H26408db61afc4fb1b22ea64ed030b0b6H_80x.avif);"></label>
            <span class="tooltip-label top">Blue</span>
        </div>
        `,
        imgArr: ['img/H9f97da1089624cc6a17a70cc670560873_1800x1800.webp' , 'img/H8442be7dbee449fdbedd7a345b7a36a7a_1800x1800.jpg' , 'img/H26408db61afc4fb1b22ea64ed030b0b6H_1800x1800.jpg' , 'img/Hc917acd85d7d49298ea9f52cafd2b98dO_1800x1800.jpg' , 'img/Hc1b4243842854956a0046b18a6ea8f15U_1800x1800.jpg']
    },
    {
        id: 12,
        name: 'leather backpack Black',
        price: 100,
        imgUrl: 'img/1_5d299525-1779-4ef1-914e-60a3ff915599_350x.webp',
        qty:1,
        imgHover: 'img/2_93e26bba-3eef-4985-9702-3cb3b7d40238_550x.webp',
        lis: ``,
        sold: true,
        imgs: `
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/1_5d299525-1779-4ef1-914e-60a3ff915599_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/2_93e26bba-3eef-4985-9702-3cb3b7d40238_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/3_e97380fd-82d3-4772-9c97-ca826721f393_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/6_a463d52a-589f-4626-8f9a-424d167d11ae_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/7_31c69cf2-c4aa-4241-89e0-75997b478efb_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/8_8e9c7f24-766a-4c42-9a01-180f506bbddd_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        <div class="pr_photo">
        <span class="imgWrapper">
                <img src="img/1_5d299525-1779-4ef1-914e-60a3ff915599_1800x1800.webp" alt="" class="img-fluid">
        </span>
        </div>
        `,
        inputs: '',
        imgArr: ['1_5d299525-1779-4ef1-914e-60a3ff915599_1800x1800.webp' , '2_93e26bba-3eef-4985-9702-3cb3b7d40238_1800x1800.webp' , '3_e97380fd-82d3-4772-9c97-ca826721f393_1800x1800.webp' , '6_a463d52a-589f-4626-8f9a-424d167d11ae_1800x1800.webp' , '7_31c69cf2-c4aa-4241-89e0-75997b478efb_1800x1800.webp' , '8_8e9c7f24-766a-4c42-9a01-180f506bbddd_1800x1800.webp']
    }
]

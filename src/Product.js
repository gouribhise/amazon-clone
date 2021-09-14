import React from 'react'
import './Product.css'
function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>some info</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>*</p>
                  

                </div>
            </div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product

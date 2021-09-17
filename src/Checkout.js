import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
              
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/ILM/Fuji_ILM_Ship_en_US._CB665226464_.png"
                    alt="ad banner" />
                <div>
                   <h2 className="checkout__title">
                        Your shopping basket 
                    </h2>
                    
                </div>       
                    
          
            </div>
            <div className="checkout__right">
                <Subtotal/>
                 
            </div>
        </div>

      
    )
}

export default Checkout

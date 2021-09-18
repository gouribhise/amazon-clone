import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/71nUkovUJQL._SX3000_.jpg" alt="amazon banner" />
                <div className="home__row">
                    <Product id={1} title="The lean startup" price={29.99}
                        image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY327_QL65_.jpg" rating={5}/>
                    <Product id={2} title="How to Use The Laws of Mind"
                        price={30.00 }
                        image="https://images-na.ssl-images-amazon.com/images/I/41GXsLdbvnL._SX388_BO1,204,203,200_.jpg"
                    rating={5}/>
                    
                </div>

                <div className="home__row">
                    <Product id={3} title="Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm)"
                        price={300.00}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31mQkwS2txL._SY300_SX300_QL70_FMwebp_.jpg"
                        rating={4}/>
                    <Product id={4} title="EKSA E900 Wired Stereo Gaming Headset"
                        price={50.00}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51cvA7MF5iS._SX300_SY300_QL70_FMwebp_.jpg"
                        rating={3}/>
                    <Product id={5} title="All-New Kindle Oasis (10th Gen) "
                        price={330}
                        image="https://m.media-amazon.com/images/I/61ktmqLUahL._SX679_.jpg"
                        rating={4}/>
                    
                </div>

                <div className="home__row">
                    <Product id={6} title="ASUS TUF Gaming A15 (2021) 15.6-inch (39.62 cms)"
                        price={1100}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41LDfnScXZS._SX300_SY300_QL70_FMwebp_.jpg"
                        rating={5}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home

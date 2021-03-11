import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/3000x1200_Hero-Tall_NP._CB660400564_.jpg"
          alt=" "
        />

        <div className="home_row">
          <Product
            id="0"
            title="Xbox One X Cyberpunk 2077 Limited Edition Bundle (1TB)"
            price={699.0}
            image="https://m.media-amazon.com/images/I/71RW-dl0szL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="1"
            title="New Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Rose Gold (Latest Model, 4th Generation)"
            price={899.0}
            image="https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="2"
            title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
            price={599.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="3"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
            price={34.99}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Amazon Brand - Solimo 100% Cotton Padded Oven Gloves Paisley, (Pack of 2, Blue)"
            price={4.99}
            image="https://m.media-amazon.com/images/I/41cnnnghucL._AC_SR400,600_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="5"
            title='GIGABYTE AORUS CV27F 27" 165Hz 1080P 1500R FreeSync Gaming Monitor, Exclusive Built-in ANC, 1920x1080 Display, 1 ms Response Time, HDR, 90% DCI-P3, 1x Display Port 1.2, 2X HDMI 2.0, 2X USB 3.0'
            price={799.0}
            image="https://m.media-amazon.com/images/I/418fPJ7pn3L._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

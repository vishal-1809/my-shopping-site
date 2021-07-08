import React from "react";
import { useState } from "react";

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
        name: "Headphone",
        cost: "1,999",
        image: 
        "https://images-eu.ssl-images-amazon.com/images/I/41OBoOnwLUL.jpg",
    },
    {
        name: "Tablet",
        cost: "9,999",
        image: 
        "https://images-eu.ssl-images-amazon.com/images/I/415-En1X-lL.jpg",
    },
    {
        name: "Earphone",
        cost: "999",
        image: 
        "https://images-eu.ssl-images-amazon.com/images/I/31N9z2rXiBL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        name: "Bag",
        cost: "1,999",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/81BvxQbA0TL._SL1500_.jpg",
    },
    {
        name: "Lenovo Laptop",
        cost: "39,999",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/71iyJJMr-NL._SL1500_.jpg",
    },
    {
        name: "HP Spectra Laptop",
        cost: "1,49,999",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/41WhJ2Nq7fL.jpg",
    },
    {
        name: "Fitness Watch",
        cost: "1,49,999",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/71fLv9pWzBL._SL1500_.jpg",
    },
    {
        name: "Mouse",
        cost: "999",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/712V7Y9ysEL._SL1500_.jpg",
    },
    {
        name: "Iphone 10+",
        cost: "51,999",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg",
    },
    {
        name: "Camera",
        cost: "19,999",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/71jHTzcWDCL._SL1500_.jpg",
    },
    {
        name: "Nikon ACULON A211 16X50 Binoculars",
        cost: "10,049",
        image: 
        "https://images-na.ssl-images-amazon.com/images/I/71rDnFQ1ZrL._SL1500_.jpg",
    },
    {
      name: "Speaker",
      cost: "10,999",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61i-0KkQs7L._SL1500_.jpg",
    },
    {
      name: "CC TV Camera",
      cost: "3,999",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51pnnIA8IaL._SL1080_.jpg",
    },
    {
      name: "SOCKS Running Shoes For Men",
      cost: "499",
      image:
        "https://rukminim1.flixcart.com/image/880/1056/kd69z0w0/shoe/g/6/m/socks-04-grey-density-grey-original-imafu4xyfffefd3z.jpeg?q=50",
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <>
      <h1 className="heading">Products</h1>

      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs. {product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button className="btnv" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

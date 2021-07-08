import React from "react";

export default function Favorite({ setCart, cart }) {
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  console.log(cart.length);
  if(cart.length === 0){
    return (
    <>
      <div className="about">
        <p>Nothing to Display Here...</p>
      </div>
    </>
    );
  }
  else {
  return (
    <div>
      <h1 className="heading">Favorites</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button className="btnv" onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
        }
}

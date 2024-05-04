import { useState } from "react";

export default function Orders() {
  const orders = useState(JSON.parse(localStorage.getItem('orders')));

  let totalPrice = 0;
  for (let i = 0; i < orders.length; i++) {
    const element = orders[i];
    totalPrice += element.price;
  }

  return (
    <div className="container">
      <div className="head">Votre panier</div>
      <div className="list-content">
        {orders.map((item, index) => {
          <SingleItem key={index} name={item.name} price={item.price} />
        })}
      </div>
      <div className="total">
        <div className="left">Total</div>
        <div className="right">
          {totalPrice}
        </div>
      </div>
      <button>Valider mon achat</button>
    </div>
  )
}

/**
 * Function that returns a Single Item for the Checkout
 * @param {name, price} param0 
 * @returns <SingleItem/>
 */
function SingleItem({ name = "", price = 0 }) {
  return (
    <div className="single-item">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
  )
}

import { useEffect, useState } from "react";

function SingleItem({ children, id, path, desc, price }) {
  const [orders, setOrders] = useState(localStorage.getItem('orders'));
  const [imgPath, setPath] = useState(path);

  useEffect(() => {
    Array.isArray(path) ? setPath(path[0]) : '';
   }, [path])

  const handleItemAdd = () => {
    if (orders && orders.length > 1) {
      const newOrders = [
        { ...orders },
        {
          id: id,
          price: price,
        }]
      localStorage.setItem('orders', JSON.stringify(newOrders));
      setOrders(localStorage.getItem('orders'))
    } else {
      const newOrders = [{
        id: id,
        price: price,
      }]
      localStorage.setItem('orders', JSON.stringify(newOrders));
      setOrders(localStorage.getItem('orders'))
    }
  }

  return (
    <div className="single-item">
      <div className="left">
        <img src={imgPath} loading="lazy" decoding="async" alt={children} width={250} />
      </div>
      <div className="right">
        <div className="title">
          <h3> Nom : </h3> {children}
        </div>
        <div className="about">
          <h3> Description : </h3>
          <p className="description">{desc}</p>
        </div>
        <div className="price">
          <h3> Prix : </h3>
          <p className="price">{price} €</p>
        </div>
        <div className="cta" onClick={handleItemAdd}>
          Acheter
        </div>
      </div>
    </div>
  )
}
export default SingleItem;
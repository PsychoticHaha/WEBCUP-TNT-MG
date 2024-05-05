import { useEffect, useState } from "react";

function SingleItem({ children, id, path, desc, price }) {
  const [imgPath, setPath] = useState(path);

  useEffect(() => {
    Array.isArray(path) ? setPath(path[0]) : '';
  }, [path])

  const handleItemAdd = () => {
    console.log(id);
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
          Ajouter au panier
        </div>
      </div>
    </div>
  )
}
export default SingleItem;
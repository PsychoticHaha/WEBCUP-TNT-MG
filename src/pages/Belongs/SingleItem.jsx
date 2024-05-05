import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function SingleItem({ children, id, path, desc, price }) {

  const [imgPath, setPath] = useState(path);

  useEffect(() => {
    Array.isArray(path) ? setPath(path[0]) : '';
  }, [path])

  const handleItemAdd = () => {
    const element = document.getElementById(`${id}`);
    element.remove();
    toast.success(`Félicitations ! On vous livrera l'article: ${children} !`, { duration: 4000 })
  }

  return (
    <div className="single-item" id={id}>
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
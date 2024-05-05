import { Link } from "react-router-dom";

function ProductList() {
  return (
    <section className="products">
      <div className="text products-list">
        <h1>Pourquoi ce site ? </h1>
        <p>C&apos;est pour que vous puissiez acquérir ces choses de façon abordable.</p>
        <p> <span className="dot"></span> En voici quelques échantillons : </p>
      </div>
      <div className="list-container">
        <div className="left">
          <img src="/assets/images/ken/corvette.webp" loading="lazy" decoding="async" alt="La corvette de Barbie" />
          <img src="/assets/images/ken/kitchen.webp" loading="lazy" decoding="async" alt="Meubles de Ken" />
        </div>
        <div className="right">
          <img src="/assets/images/ken/kollier.webp" loading="lazy" decoding="async" alt="Collier K de Ken" className="kollier-k" />
        </div>
      </div>
      <Link to={"/biens"} className="cta">
        <div className="text">
          Voir la liste complète.
        </div>
        <span className="filling"></span>
      </Link>
    </section>
  )
}
export default ProductList;
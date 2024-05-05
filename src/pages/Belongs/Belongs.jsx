import { Suspense, lazy } from "react";
import Navbar from "../../components/Navbar.jsx";
import items from "../../utils/items.js";
import './../../assets/stylesheets/Belongs.scss'
import Loader from "../../components/Loader.jsx";

const SingleItem = lazy(() => import("./SingleItem.jsx"))

function Belongs() {
  document.title = "Mes biens | KEN"

  return (
    <>
      <Navbar text="Se connecter" />
      <section className="shop-list">
        <Suspense fallback={<Loader />}>
          {
            items.map((item, index) => {
              return (
                <SingleItem
                  key={index}
                  id={item.id}
                  path={item.img_path}
                  desc={item.description}
                  price={item.price}>
                  {item.name}
                </SingleItem>
              )
            })
          }
        </Suspense>
      </section>
    </>
  );
}

export default Belongs;
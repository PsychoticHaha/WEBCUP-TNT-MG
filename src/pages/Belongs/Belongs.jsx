import { Suspense, lazy } from "react";
import Navbar from "../../components/Navbar.jsx";
import items from "../../utils/items.js";
import './../../assets/stylesheets/Belongs.scss'
import Loader from "../../components/Loader.jsx";
import ConnectedState from "../../components/ConnectedState.jsx";
import useLS from "../../hooks/useLS.jsx";

const SingleItem = lazy(() => import("./SingleItem.jsx"))

function Belongs() {
  document.title = "Mes biens | KEN"
  const logged=useLS('logged', false);

  return (
    <>
      <Navbar text="Se connecter" />
      {logged && <ConnectedState />}
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
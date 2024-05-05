import { Suspense, lazy, useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import items from "../../utils/items.js";
import './../../assets/stylesheets/Belongs.scss'
import Loader from "../../components/Loader.jsx";

const SingleItem = lazy(() => import("./SingleItem.jsx"))

function Belongs() {
  document.title = "Mes biens | KEN"
  const [data] = useState(items)
  const [chars, setChars] = useState("")

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setChars(keyword);

  }
  const filteredData = data.filter(d => {
    const regex = new RegExp(chars, 'i');
    return regex.test(d.name) || regex.test(d.email);
  });

  return (
    <>
      <a id="top"></a>
      <Navbar text="Se connecter" />
      <input type="text" id="search" placeholder="Rechercher..." value={chars} onChange={handleSearch} />
      <section className="shop-list">
        <Suspense fallback={<Loader />}>
          {
            filteredData.map((item) => {
              return (
                <SingleItem
                  key={item.id}
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
      <a href="#top" className="back-to-top">
        <svg fill="#000000" height="25px" width="25px" version="1.1" viewBox="0 0 330 330"><g></g><g></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
      </a>
    </>
  );
}

export default Belongs;
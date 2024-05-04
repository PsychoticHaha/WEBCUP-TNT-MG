import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import './../../assets/stylesheets/home.scss'

function Home() {
  return (
    <>
      <Navbar />
      <main className="home-content" >
        <section className="hero">
          <div className="left">
            <img src="/assets/images/home/ken-explique.webp" alt="Ken explique" />
          </div>
          <div className="right">
            <div className="text">
              <h1>Je m&apos;appelle Ken et  c&apos;est la fin de ma belle histoire avec Barbie.</h1>
              <p>
                Vous savez qu&apos;on a divorcé ? <strong> Elle m&apos;a trompé.</strong> 😓 </p>
              <p>Je ne veux pas m&apos;attacher à de vieilles choses, ça me rappelle trop de souvenirs.
                <strong> Donc, j&apos;ai mis mes biens en vente.</strong>
              </p>
            </div>
            <div className="cta">
              <Link to="/biens">
                Voir tous mes biens
              </Link>

              <a href="#story">
                En savoir plus ?
              </a>

            </div>
          </div>
        </section>
        <section className="story" id="story">
          <div className="left">
            <div className="text">
              <h1>Quelle ironie !</h1>
              <p>
                Comme vous l&apos;avez vu, j&apos;essaie de garder le sourire malgré tout.
              </p>
              <p>J&apos;essaie aussi de m&apos;amuser avec mes amis.</p>
              <p>Je garde la tête haute, mais j&apos;aimerais me débarrasser de ces beaux objets pour ne pas en souffrir.</p>
            </div>
            <div className="cta">
              <Link to="/biens">
                Profiter des prix bas
              </Link>
            </div>
          </div>
          <div className="right">
            <img src="/assets/images/home/friends.webp" loading="lazy" async alt="Ken avec ses amis" />
          </div>
        </section>
        <section className="products">
          <div className="text products-list">
            <h1>Pourquoi ce site ? </h1>
            <p>C&apos;est pour que vous puissiez acquérir ces choses de façon abordable.</p>
            <p> <span className="dot"></span> En voici quelques échantillons : </p>
          </div>
          <div className="list-container">
            <div className="left">
              <img src="/assets/images/ken/corvette.webp" alt="La corvette de Barbie" />
              <img src="/assets/images/ken/kitchen.webp" alt="Meubles de Ken" />
            </div>
            <div className="right">
              <img src="/assets/images/ken/kollier.webp" alt="Collier K de Ken" className="kollier-k" />
            </div>
          </div>
          <Link to={"/biens"} className="cta">
            <div className="text">
              Voir la liste complète.
            </div>
            <span className="filling"></span>
          </Link>
        </section>
      </main>
      <div className="bottom-info">
        <p>Ce site est certifié &quot;écologique&quot; par :</p>
        <div className="icon"></div>
        <a href="https://ecoindex.fr" className="link" target="_blank">
          🟢<span className="eco">eco</span><span className="index">Index</span>
        </a>
      </div>
      {/* <div style={{ height: "800vh" }}></div> */}
    </>
  );
}

export default Home;
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
              <h1>C&apos;est la fin de ma belle histoire avec Barbie !</h1>
              <p>Bienvenue sur le site de KEN, c&apos;est-à-dire, MOI !</p>
              <p>
                Vous savez qu&apos;on a divorcé ? Elle ne m&apos;aime plus. Alors
                Je ne veux pas m&apos;attacher à de vieilles choses, ça me rappelle trop de souvenir.
              </p>
            </div>
            <div className="cta">
              Voir mes biens en vente
            </div>
          </div>
        </section>
        Que deviendra ce site quand j&apos;aurais vendu tous mes biens ?
      </main>
      <div className="bottom-info">
        <p>Ce site est certifié &quot;écologique&quot; par :</p>
        <div className="icon"></div>
        <a href="https://ecoindex.fr" className="link" target="_blank">
          🟢<span className="eco">eco</span><span className="index">Index</span>
        </a>
      </div>
      <div style={{ height: "800vh" }}></div>
    </>
  );
}

export default Home;
import Navbar from "../../components/Navbar";
import './../../assets/stylesheets/home.scss'

function Home() {
  return (
    <>
      <Navbar />
      <main className="home-content" >
        <section className="hero">
          <div className="left"></div>
          <div className="right"></div>
          Que deviendra ce site quand j&apos;aurais vendu tous mes biens ?
        </section>
      </main>
      <div className="bottom-info">
        <p></p>
        <div className="icon"></div>
      </div>
      <div style={{height:"800vh"}}></div>
    </>
  );
}

export default Home;
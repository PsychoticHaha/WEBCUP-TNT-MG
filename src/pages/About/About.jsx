/* eslint-disable react/no-unescaped-entities */
import "./../../assets/stylesheets/dispute.scss";
import Navbar from './../../components/Navbar'

function About() {
  document.title = "À propos du site | KEN"
  return (
    <>
      <Navbar />
      <section className="about-sections">
        <div className="left">
          <img src="/assets/images/home/dispute.webp" alt="Barbie et Ken se disputent" />
        </div>
        <div className="right">
          <div className="text">
            <h1>Comment tout a commencé ?</h1>
            <br />
            <p>
              Elle et moi, nos voix s&apos;élèvent en tempête, échos de nos désirs brisés, tourbillon d&apos;amour et de colère, chaque mot un coup de vent dans notre océan de passion.
            </p>
            <p>
              Les moqueries faisaient parties de notre vie malgré le sentiment puissant qui nous unissait.
            </p>
          </div>
          <div className="cta">
            <a href="#step2">Zapper</a>
          </div>
        </div>
      </section>
      <section className="about-sections" id="step2">
        <div className="left">
          <img src="/assets/images/home/ken-torture.webp" alt="Image de torture" />
        </div>
        <div className="right">
          <div className="text">
            <h1>L&apos;histoire ne s&apos;arrête pas là !</h1>
            <p>Barbie a eu la mauvaise idée de me torturer d&apos;une drôle de manière en brulant quelques vêtements sous mes yeux. Après ça, elle m&apos;a detaché et elle est partie pour rejoindre son amant.
            </p>
            <p>
              Dans la chambre autrefois remplie de rires et de tendresse, je me retrouvais  seul, entouré de silence.
            </p>
          </div>
          <div className="cta">
            <a href="#step3">Zapper</a>
          </div>
        </div>
      </section>
      <section className="about-sections" id="step3">
        <div className="left">
          <img src="/assets/images/home/surprise.webp" alt="Barbie surprise" />
        </div>
        <div className="right">
          <div className="text">
            <h1>Quand elle est revenue, j&apos;étais déjà prêt à partir. </h1>
            <p>Le divorce n'était pas loin d'éclater entre nous à ce moment-là. C'est aussi pendant cette période que j'ai demandé le divorce et que j'ai fait construire ce site par l'équipe <strong> TNT MG TEAM </strong>.
            </p>
            <p>
              Alors, achetez ces choses pour que je puisse passer à autre chose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
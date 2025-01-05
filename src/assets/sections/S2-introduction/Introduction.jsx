import React from "react";
import styles from "./Introduction.module.css";
import rectangule_right from "../../images/Rectangle387.svg";
import rectangule_left from "../../images/Rectangle_left.svg";

const scrollToSection = (id) => {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
  document.body.classList.remove("noScroll");
};

function Introduction() {
  return (
    <section id="S2-introduction" className={styles.S2_introduction}>
      <img src={rectangule_right} alt="" className={styles.rectangule_right} />
      <img src={rectangule_left} alt="" className={styles.rectangule_left} />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textTop}>
            <h1>INTRODUÇÃO</h1>
            <p>
              Você sabia que a chave para entender e curar nossas dores físicas e
              emocionais pode estar na forma como entendemos a realidade e nosso próprio
              corpo? Vou lhe mostrar uma nova perspectiva da medicina, que mudou minha
              vida e a de muitos outros.
            </p>
          </div>
          <div className={styles.textBot}>
            <h1>HISTÓRIA PESSOAL</h1>
            <p>
              Eu sou médica e, mais do que isso, também fui paciente. A tristeza da morte
              do meu amado filho, Joaquim, me lançou em uma espiral de depressão. Mas foi
              essa dor que me levou a descobrir a medicina energética e a física quântica.
              Essa jornada não só me curou da depressão como também revelou uma nova forma
              de entender e tratar as doenças.
            </p>
            <button
              className="btn-primary button"
              onClick={() => scrollToSection("S7-buy")}
            >
              Liberar acesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

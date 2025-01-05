import React from "react";
import styles from "./Routine.module.css";
import ebookBed from "../../images/ebook-deitado.png";

const scrollToSection = (id) => {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
  document.body.classList.remove("noScroll");
};

function Routine() {
  return (
    <section id="S4-routine" className={`${styles.spacer} ${styles.layer1}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={ebookBed} alt="Imagem do Ebook Fortalecendo Sua Fé" />
          </div>
          <div className={styles.right}>
            <p>
              Isso é apenas a superfície do que você vai encontrar neste e-book... Afinal,
              você também aprenderá{" "}
              <span>
                como transformar suas rotinas diárias em momentos de conexão profunda com
                Deus, capazes de injetar uma paz e uma força espiritual imensuráveis em
                sua vida
              </span>{" "}
              (página 26).
            </p>
            <p className={styles.sevenDays}>
              E verá muitas outras maneiras para você fortalecer relacionamento com Deus
              em 7 dias.
            </p>
            <button
              className="btn-primary secondary"
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

export default Routine;

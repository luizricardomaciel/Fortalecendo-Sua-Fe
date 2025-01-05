import React from "react";
import styles from "./SeeMore.module.css";

import iconPray from "../../images/icon-hands.svg";
import iconBible from "../../images/icon-bible.svg";
import iconHands from "../../images/icon-hands-up.svg";
import iconRoutine from "../../images/icon-routine.svg";

const scrollToSection = (id) => {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
  document.body.classList.remove("noScroll");
};

function SeeMore() {
  return (
    <section id="S3-seeMore">
      <div className="container">
        <div className={styles.content}>
          <h1>Veja uma fração do que você terá acesso ao adquirir seu e-book:</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img
                src={iconPray}
                alt="Ícone de duas mãos abertas juntas voltadas para cima"
              />
              <p>
                Descubra como usar a oração e a meditação para fortalecer sua fé e
                encontrar paz interior, mesmo nos dias mais agitados.
              </p>
            </div>
            <div className={styles.card}>
              <img src={iconBible} alt="ícone de uma Bíblia" />
              <p>
                Estratégias práticas para criar uma rotina diária de leitura bíblica e
                reflexão espiritual que se encaixe perfeitamente no seu dia a dia.
              </p>
            </div>
            <div className={styles.card}>
              <img
                src={iconHands}
                alt="ícone mostra duas mãos levantadas com as palmas voltadas para 
                frente, cercadas por linhas que sugerem movimento ou celebração"
              />
              <p>
                Dicas valiosas para incorporar momentos de gratidão e louvor em sua
                rotina, ajudando a manter uma perspectiva positiva e conectada com Deus.
              </p>
            </div>
            <div className={styles.card}>
              <img
                src={iconRoutine}
                alt="ícone geralmente representa a conclusão de uma tarefa ou a atualização
                 de um processo"
              />
              <p>
                Métodos eficazes para equilibrar suas responsabilidades diárias com tempo
                de qualidade dedicado à sua espiritualidade, sem se sentir sobrecarregado.
              </p>
            </div>
          </div>
          <p className={styles.more}>E muito, muito mais....</p>
          <button
            className="btn-primary button"
            onClick={() => scrollToSection("S7-buy")}
          >
            Liberar acesso
          </button>
        </div>
      </div>
    </section>
  );
}

export default SeeMore;

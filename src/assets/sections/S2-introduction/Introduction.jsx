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
              Descubra a única forma inteligente de transformar sua vida, aprendendo como
              construir uma rotina focada em Deus e no propósito real – uma habilidade
              espiritual e pessoal que ninguém pode tirar de você.
              <br />
              <br />
              E, sim, VOCÊ pode começar essa jornada agora.
              <br />
              <br />
              Apenas dê o “start” para alinhar sua vida aos planos de Deus e, pouco a
              pouco, de forma realista e com fé, você avançará rumo a uma vida plena,
              equilibrada e cheia de significado.
            </p>
          </div>
          <div className={styles.textBot}>
            <h1>HISTÓRIA PESSOAL</h1>
            <p>
              Luiz Ricardo e Alexander Nunes desenvolveram este e-book para ajudar
              famílias a encontrarem propósito e construírem uma rotina guiada por Deus,
              sem se perderem nas distrações do dia a dia.
              <br />
              <br />
              Apesar de hoje viverem uma vida plena e realizada, Luiz e Alexander já
              estiveram no seu lugar e entendem os desafios que você enfrenta.
              <br />
              <br />
              Eles já passaram por dificuldades como viver em uma casa simples, lidar com
              o estresse das dívidas e encarar trabalhos desafiadores enquanto buscavam
              sentido para suas vidas. Suas histórias são a prova de que, com fé,
              disciplina e o foco certo, a transformação é possível para todos.
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

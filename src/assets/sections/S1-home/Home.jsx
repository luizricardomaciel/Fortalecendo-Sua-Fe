import React from "react";
import triangulo from "../../images/triangulo.svg";
import clients from "../../images/clientes.png";
import rectangleHome from "../../images/Rectangle-home.svg";
import ebook_Home from "../../images/image-home 1.png";
import styles from "./Home.module.css";

const scrollToSection = (id) => {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
  document.body.classList.remove("noScroll");
};

function Header() {
  return (
    <section id="S1-home">
      <img src={rectangleHome} alt="Rectangle design" className={styles.rectangle} />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.text}>
              <h1>
                Descubra uma Conexão Profunda com Deus e Rotinas Diárias Transformadoras
                HOJE!
              </h1>
              <p>
                Finalmente! Baixe o novo e-book{" "}
                <span>"Fortalendo Sua fé” com Deus em 7 Dias</span> e descubra como criar
                uma <span>rotina espiritual</span> sem perder tempo.
              </p>
            </div>
            <div className={styles.sevenDays}>
              <img src={triangulo} alt="Attention icon" />
              <p>
                Se você não sentir uma transformação espiritual em sete dias, eu devolvo
                seu dinheiro.
              </p>
            </div>
            <button
              className="btn-primary button"
              onClick={() => scrollToSection("S7-buy")}
            >
              Liberar acesso
            </button>
            <div className={styles.client}>
              <img src={clients} alt="Real image of customers" />
              <p>
                +250.000 alunos <span>★★★★★</span>
              </p>
            </div>
          </div>
          <div className={styles.rigth}>
            <img src={ebook_Home} alt="Imagem do Ebook Fortalecendo Sua Fé" />
            <button
              className={`btn-primary button ${styles.hiden}`}
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

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

export default Home;

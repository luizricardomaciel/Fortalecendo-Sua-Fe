import React from "react";
import styles from "./Buy.module.css";
import iconLogo from "../../images/icon logo.svg";
import iconFire from "../../images/icon-fire.svg";
import iconConclude from "../../images/icon-conclude.svg";
import Rectangle_R from "../../images/Rectangle-R-buy.svg";
import Rectangle_L from "../../images/Rectangle-L-buy.svg";
import iconAttention from "../../images/attention-svgrepo-com.svg";

import { useState, useEffect } from "react";

function Buy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const targetSection = document.getElementById("S7-buy");
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section id="S7-buy" className={styles.warranty}>
      <img src={Rectangle_R} alt="" className={styles.rectangule_right} />
      <img src={Rectangle_L} alt="" className={styles.rectangule_left} />
      <div className={styles.content}>
        <img
          src={iconLogo}
          alt="Ícone logo, e-book Fortalecendo sua fé"
          className={styles.iconLogo}
        />
        <div className={styles.price}>
          <p>
            De <span>R$197,00</span>
          </p>
          <span>
            <p>Por apenas</p>
          </span>
          <h1>R$19,90</h1>
        </div>
        <a href="#" className="btn-primary button">
          Quero comprar com desconto
        </a>
        <h1 className={styles.title}>Resumo de tudo que você vai receber:</h1>
        <div className={styles.bonuses}>
          <img src={iconFire} alt="Ícone fogo, para presente misterioso" />
          <p>
            <span>Bônus:</span> Um presente surpresa
          </p>
        </div>
        <ul>
          <li>
            <img src={iconConclude} alt="Ícone conclusão" />
            <p>Entenda a importância de cada prática espiritual.</p>
          </li>
          <li>
            <img src={iconConclude} alt="Ícone conclusão" />
            <p>Aprenda como incorporar essas práticas em sua rotina diária.</p>
          </li>
          <li>
            <img src={iconConclude} alt="Ícone conclusão" />
            <p>Descubra os frutos espirituais que você pode colher.</p>
          </li>
          <li>
            <img src={iconConclude} alt="Ícone conclusão" />
            <p>Entenda a importância de cada prática espiritual.</p>
          </li>
          <li>
            <img src={iconConclude} alt="Ícone conclusão" />
            <p>Garantia: Transformação espiritual em 7 dias ou seu dinheiro de volta</p>
          </li>
          <li>
            <img src={iconConclude} alt="Ícone conclusão" />
            <p>Acesso Irrestrito e Vitalício do material</p>
          </li>
        </ul>
        <div className={styles.client}>
          <p>
            +53.000 alunos <span>★★★★★</span>
          </p>
        </div>
      </div>
      {isVisible && (
        <div className={styles.oferta}>
          <img src={iconAttention} alt="Ícone de atenção: a oferta vai acabar." />
          <p>O DESCONTO DESSA OFERTA VAI ACABAR A QUALQUER MOMENTO</p>
        </div>
      )}
    </section>
  );
}

export default Buy;

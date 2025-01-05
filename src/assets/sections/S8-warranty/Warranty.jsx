import React from "react";
import styles from "./Warranty.module.css";
import iconWarranty from "../../images/Garantia-Selo.svg";

function Warranty() {
  return (
    <section className={styles.warranty}>
      <div className={styles.content}>
        <img
          src={iconWarranty}
          alt="Ícone de garantia 7 dias, e-book Fortalecendo sua fé"
        />
        <div className={styles.text}>
          <h1>
            Experimente: uma transformação espiritual em 7 dias ou seu dinheiro de volta!
          </h1>
          <p>
            Você pode acessar TODAS maneiras de fortalecer seu relacionamento com Deus em
            7 dias sem nenhum compromisso financeiro nesse primeiro momento.
          </p>
          <p>
            <span>O seu risco é nulo na primeira semana</span>, porque você pode reaver
            100% do seu dinheiro investido no e-book se assim desejar.
          </p>
          <p>Você não tem mais nada a perder. A decisão fica fácil…</p>
          <p>
            Se você quer descobrir como fortalecer seu relacionamento com Deus nos
            próximos 7 dias de forma prática e direto ao ponto, basta baixar seu e-book
            agora.
          </p>
        </div>
        <a
          href="https://pay.kiwify.com.br/Bp0uAaq"
          className="btn-primary button"
          target="_blank"
        >
          Liberar acesso por apenas R$19,90
        </a>
      </div>
    </section>
  );
}

export default Warranty;

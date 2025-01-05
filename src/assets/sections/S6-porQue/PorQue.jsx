import React from "react";
import style from "./PorQue.module.css";
import ebookBook from "../../images/ebook-livro.png";

const scrollToSection = (id) => {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
  document.body.classList.remove("noScroll");
};

function PorQue() {
  return (
    <section>
      <div className="container">
        <div className={style.content}>
          <div className={style.title}>
            <p>Mas você pode estar pensando…</p>
          </div>
          <div className={style.bot}>
            <div className={style.left}>
              <img src={ebookBook} alt="Imagem do Ebook Fortalecendo Sua Fé" />
            </div>
            <div className={style.rigth}>
              <h1>Por que tão barato?</h1>
              <p>
                Este <span>e-book de R$ 19,90</span> está repleto de valor, é totalmente
                livre de exageros e te ensina múltiplas maneiras de fortalecer seu
                relacionamento com Deus em 7 dias.
              </p>
              <p>Mas o preço baixo levanta dúvidas. Entendemos isso.</p>
              <p>E sinceramente? Vamos continuar mantendo o preço baixo, assim mesmo.</p>
              <p>Por quê?</p>
              <p>
                por que não? Se a vida das pessoas puder ser minimamente transformada com
                um <span>relacionamento mais profundo com Deus em 7 dias</span>, por que
                não fazer isso de forma acessível? Por que cobrar preços absurdos e fazer
                promessas exageradas se eu posso oferecer <span>transformação real</span>,
                livre de exageros?
              </p>
              <p>Prefiro assim.</p>
              <p>
                Ao mesmo tempo, você conhece o meu trabalho e entende o nível de impacto
                positivo das minhas ofertas. É uma dinâmica clássica de ganha-ganha.
              </p>
            </div>
          </div>
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

export default PorQue;

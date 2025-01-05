import React, { useState } from "react";
import styles from "./Faq.module.css";
import iconArrow_off from "../../images/icon-arrow.svg";
import iconArrow_on from "../../images/icon-arrow_on.svg";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quanto custa o e-book “Fortalecendo Sua Fé com Deus em 7 Dias?”",
      answer:
        "O investimento para baixar o e-book é de apenas R$ 19,90 (uma única vez) e nada além disso. Você quer “trocar” o valor de R$ 19,90 pela habilidade de fortalecer seu relacionamento com Deus e criar rotinas espirituais transformadoras? É você quem decide.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Você pode garantir seu e-book por Pix, Conta Hotmart ou Cartão de Crédito.",
    },
    {
      question: "Como vou acessar o e-book?",
      answer:
        "Como o e-book é um livro digital, ele será enviado para você por e-mail (o mesmo e-mail que você usar para a compra).",
    },
    {
      question: "E se eu não tiver sucesso?",
      answer:
        "O e-book apresenta varias maneiras diferentes para que você encontre pelo menos uma que faça sentido para sua jornada espiritual – é praticamente um plano à prova de falhas. Mas se você achar que não é para você, terá direito ao reembolso durante os primeiros 7 dias.",
    },
    {
      question: "Por quanto tempo terei acesso ao e-book?",
      answer: "Você terá acesso ao e-book por toda a vida.",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <h1>Dúvidas Frequentes</h1>
          <div className={styles.bot}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faq}>
                <div className={styles.question} onClick={() => toggleFaq(index)}>
                  <h2 style={{ color: openIndex === index ? "#866B42" : "#000000" }}>
                    {faq.question}
                  </h2>
                  <img src={openIndex === index ? iconArrow_on : iconArrow_off} alt="" />
                </div>
                <div
                  className={`${styles.answer} ${openIndex === index ? styles.show : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="btn-primary button">
            Liberar acesso por apenas R$19,90
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;

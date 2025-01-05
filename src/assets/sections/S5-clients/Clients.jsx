import React from "react";
import styles from "./Clients.module.css";
import iconGoogle from "../../images/icon-google.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Clients() {
  return (
    <section id="S5-clients">
      <div className="container">
        <div className={styles.content}>
          <h1>Depoimentos</h1>
          <Swiper
            className={styles.clients}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 16,
              },
              600: {
                slidesPerView: 2.3,
                spaceBetween: 15,
              },
              998: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className={styles.client}>
              <div className={styles.top}>
                <div className={styles.name}>
                  <p>Marcos Vinicios</p>
                </div>
                <div className={styles.logo}>
                  <img src={iconGoogle} alt="ícone do google" />
                </div>
              </div>
              <div className={styles.bot}>
                <p>
                  Apliquei a Maneira #02 e, de forma simples e eficaz, já senti a presença
                  de Deus em minha vida. Essa prática diária, baseada em passagens
                  bíblicas e rotinas espirituais, fortaleceu minha fé e trouxe paz ao meu
                  coração.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.client}>
              <div className={styles.top}>
                <div className={styles.name}>
                  <p>Junior Santos</p>
                </div>
                <div className={styles.logo}>
                  <img src={iconGoogle} alt="ícone do google" />
                </div>
              </div>
              <div className={styles.bot}>
                <p>
                  através da Maneira #06 e venho faturando R$ 20.000 todo mês. Além disso,
                  o ebook me ajudou a fortalecer meu relacionamento com Deus e a
                  incorporar passagens bíblicas em minhas rotinas diárias. Recomendo muito
                  este ebook inspirador!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.client}>
              <div className={styles.top}>
                <div className={styles.name}>
                  <p>Matheus Rios</p>
                </div>
                <div className={styles.logo}>
                  <img src={iconGoogle} alt="ícone do google" />
                </div>
              </div>
              <div className={styles.bot}>
                <p>
                  transformei minha vida com foco em Deus, uma rotina consistente e
                  escolhas certas. Alcancei uma vida plena e realizada. Quero mostrar que
                  a verdadeira mudança é possível!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.client}>
              <div className={styles.top}>
                <div className={styles.name}>
                  <p>Ana Paula</p>
                </div>
                <div className={styles.logo}>
                  <img src={iconGoogle} alt="ícone do google" />
                </div>
              </div>
              <div className={styles.bot}>
                <p>
                  quero contar como Deus me ajudou a sair de uma vida desorganizada e sem
                  propósito para construir uma rotina focada, plena e cheia de
                  significado. Com fé, disciplina e pequenas mudanças diárias, vivi uma
                  verdadeira transformação e alcancei a paz que tanto buscava.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.client}>
              <div className={styles.top}>
                <div className={styles.name}>
                  <p>Marcos Silva</p>
                </div>
                <div className={styles.logo}>
                  <img src={iconGoogle} alt="ícone do google" />
                </div>
              </div>
              <div className={styles.bot}>
                <p>
                  durante muito tempo vivi preso em uma rotina sem direção. Mas quando
                  decidi colocar Deus no centro das minhas escolhas e adotar hábitos
                  saudáveis, tudo mudou. Hoje, vivo com propósito, equilíbrio e gratidão.
                  E você também pode viver isso!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.client}>
              <div className={styles.top}>
                <div className={styles.name}>
                  <p>Juliana Oliveira</p>
                </div>
                <div className={styles.logo}>
                  <img src={iconGoogle} alt="ícone do google" />
                </div>
              </div>
              <div className={styles.bot}>
                <p>
                  quero compartilhar minha jornada de fé. Houve um tempo em que minha vida
                  parecia sem saída, mas ao entregar minhas preocupações a Deus e criar
                  uma rotina guiada por Ele, descobri força, alegria e propósito. Se eu
                  consegui, você também pode!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.client}>
              <div className={styles.top}>
                <div className={styles.name}>
                  <p>Camila Santos</p>
                </div>
                <div className={styles.logo}>
                  <img src={iconGoogle} alt="ícone do google" />
                </div>
              </div>
              <div className={styles.bot}>
                <p>
                  sempre lutei contra a procrastinação e a falta de foco. Mas quando
                  entreguei minha vida a Deus e comecei a seguir uma rotina guiada pela
                  fé, tudo começou a mudar. Agora, vivo com mais clareza, produtividade e
                  paz no coração.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;

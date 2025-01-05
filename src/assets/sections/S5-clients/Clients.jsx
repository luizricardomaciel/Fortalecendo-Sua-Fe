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
          <h1>Depiomentos</h1>
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
              delay: 2500,
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
                  Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor
                  por esse banco #bancoNeon
                </p>
              </div>
            </SwiperSlide>
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
                  Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor
                  por esse banco #bancoNeon
                </p>
              </div>
            </SwiperSlide>
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
                  Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor
                  por esse banco #bancoNeon
                </p>
              </div>
            </SwiperSlide>
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
                  Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor
                  por esse banco #bancoNeon
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

import React from 'react';
import css from '../../styles/AboutPage/cards.module.scss';
import BtnReadMore from '../buttons/BtnReadMore';

export default function InfoCard({ el }) {
  return (
    <div className={css.card}>
      {/* style={{backgroundImage: `url(${el.img})`}} */}
      <div className={css.cardWrapper}>
        <div className={css.cardContent}>
          <h1 className={css.title}>{el.title}</h1>
          <p className={css.description}>{el.description}</p>
          <BtnReadMore handler={el.link} purple>{el.btnText}</BtnReadMore>
        </div>
      </div>
      <img className={css.imgContainer} src={el.img} alt="img" />
    </div>
  );
}

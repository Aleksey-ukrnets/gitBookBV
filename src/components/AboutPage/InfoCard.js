import React from 'react';
import css from '../../styles/AboutPage/cards.module.scss';
import BtnReadMore from '../buttons/BtnReadMore';

export default function InfoCard({ el }) {
  return (
    <div className={css.card}>
      <div className={css.cardWrapper}>
        <div className={css.cardContent}>
          <h1 className={css.title}>{el.title}</h1>
          <p className={css.description}>{el.description}</p>
          <BtnReadMore purple>{el.btnText}</BtnReadMore>
        </div>
      </div>
      <div className={css.imgContainer}>
        <img src={el.img} alt="img" />
      </div>
    </div>
  );
}

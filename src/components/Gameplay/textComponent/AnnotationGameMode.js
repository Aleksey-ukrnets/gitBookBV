import React from 'react';
import css from '../../../styles/Gameplay/gameMode.module.scss';

export default function AnnotationGameMode({ info }) {
  return (
    <section className={css.section}>
      <div className={css.annotation}>
        <div className={css.titleBlock}>
          <h1 className={css.title}>{info.title}</h1>
          <p className={css.text}>{info.text}</p>
        </div>
      </div>
     { info.img && <img src={info.img} alt={info.title} />}
    </section>
  );
}

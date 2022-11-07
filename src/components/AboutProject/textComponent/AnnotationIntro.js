import React from 'react';
import css from '../../../styles/AboutProject/intro.module.scss';

export default function AnnotationIntro({ info }) {
  return (
    <section className={css.section}>
      <div className={css.annotation}>
        <div className={css.titleBlock}>
          <h1 className={css.title}>{info?.title}</h1>
          <p className={css.text}>{info?.text}</p>
          <p className={css.text}>{info?.text2}</p>
          <p className={css.text}>{info?.text3}</p>
          <p className={css.text}>{info?.text4}</p>
        </div>
      </div>
    </section>
  );
}

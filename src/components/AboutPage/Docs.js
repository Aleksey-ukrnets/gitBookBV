import React from 'react';


import css from '../../styles/AboutPage/docs.module.scss';

import BtnReadMore from '../buttons/BtnReadMore';
import bot from '../../assets/aboutPage/bot2.png';
import coin from '../../assets/aboutPage/coin2.png';
export default function Docs() {
  
  return (
    <section className={css.docsMain}>
      <div className={css.wrapper}>
        <div className={css.img}>
          <div className={css.imgContainer}>
            <div className={css.effect}></div>
            <img className={css.imgBot} src={bot} alt="img" />
          </div>
          <img className={css.imgCoin} src={coin} alt="coin" />
        </div>
        <div className={css.docsInfo}>
          <div className={css.docsWrapper}>
            <h1 className={css.title}>Docs</h1>
            <p className={css.desc}>
              Includes only basic Attack, Defence. Trick actions. Otherwise, use
              other terms like Skill or Consumable.Includes only basic Attack,
              Defence. Trick actions. Otherwise, use other terms like Skill or
              Consumable.
            </p>
            <BtnReadMore className={css.btn} handler={'/docs'} purple>read more</BtnReadMore>
          </div>
        </div>
      </div>
    </section>
  );
}

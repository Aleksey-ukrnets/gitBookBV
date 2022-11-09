import React from 'react';
import css from '../../styles/AboutPage/glossary.module.scss';
import shroomBig from '../../assets/aboutPage/shroomBig.png';
import BtnReadMore from '../buttons/BtnReadMore';

import { rowsInfo } from '../GlossaryInfo/info';
import GlossaryRows from '../GlossaryInfo/GlossaryRows';
import {ReactComponent as Effect} from '../../assets/effect.svg'
export default function Glossary() {
  return (
    <section className={css.glossary}>
      <div className={css.content}>
        <Effect className={css.svg} alt='effect' />
        <div className={css.infoBlock}>
          <h1 className={css.title}>Batteverse glossary</h1>
          <GlossaryRows rowsInfo={rowsInfo} />
          <div className={css.btn}>
            <div className={css.btnPos}>
              <BtnReadMore handler={'/lore/Glossary'} purple>read more</BtnReadMore>
            </div>
          </div>
        </div>
        <div className={css.img}>
          <div className={css.imgContainer}>
            <div className={css.effect}></div>
            <img src={shroomBig} alt="shroomBig" />
          </div>
        </div>
      </div>
    </section>
  );
}

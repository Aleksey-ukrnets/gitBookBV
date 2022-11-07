import React from 'react';
import GlossaryRows from '../GlossaryInfo/GlossaryRows';
import { rowsInfoFull } from '../GlossaryInfo/info';
import css from '../../styles/AboutPage/glossary.module.scss';
export default function GlossaryMain() {
  return (
    <div className={css.glossary} style={{ margin: '0' }}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.titleBlock}>
            <h1 className={css.title}>Batteverse glossary</h1>
          </div>
          <GlossaryRows rowsInfo={rowsInfoFull} glossarymain />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import css from '../../styles/AboutPage/glossary.module.scss';

export default function GlossaryRows({rowsInfo, glossarymain}) {
  return (
    <div className={css.columns}>
      {rowsInfo.map((el, index) => {
        return (
          <div className={css.row} key={index} style={{background: glossarymain && 'rgba(255, 255, 255, 0.05)'}}>
            <div className={css.firstCol}>
              <p className={css.text}>{el.title}</p>
            </div>
            <div className={css.secondCol}>
              <p className={css.text}>{el.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

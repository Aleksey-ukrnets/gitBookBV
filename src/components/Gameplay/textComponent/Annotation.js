import React from 'react';
import css from '../../../styles/Gameplay/characters.module.scss';
export default function Annotation({info, skills}) {
    console.log(skills)
  return (
    <div className={css.annotation}>
      <div className={css.titleBlock}>
        {info && <h1 className={css.title}>{info.title}</h1>}
        {info&& <p className={css.text}>
          {info.text}
        </p>}
        {info && info?.title === 'Upgrade' && 
        <>
        <p className={css.text}>{info.text2}</p>
        <p className={css.text}>{info.text3}</p>
        </>
        }
        {skills && <div className={css.attributes}>
          <h1 className={css.titleAttr}>{skills.title}</h1>
          {skills.infoPart.map((el, index) => {
            return (
              <div className={css.row} key={index}>
                <img src={el.img} alt={el.title} />
                <div className={css.rowContainer}>
                  <h1 className={css.title}>{el.title}</h1>
                  <p className={css.desc}>{el.text}</p>
                </div>
              </div>
            );
          })}
        </div>}
      </div>
    </div>
  );
}

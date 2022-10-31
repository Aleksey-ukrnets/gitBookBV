import React from 'react';
import css from '../../styles/AboutPage/glossary.module.scss';
import shroomBig from '../../assets/aboutPage/shroomBig.png';
import BtnReadMore from '../buttons/BtnReadMore';
export default function Glossary() {
  const rowsInfo = [
    {
      title: 'Actions',
      desc: 'Includes only basic Attack, Defence. Trick actions. Otherwise, use other terms like Skill or Consumable.',
    },
    {
      title: 'Attribute points (AP)',
      desc: 'In this phase, characters resolve the effects of Actions (Attack hits Trick, Trick hits Defence, Defence hits Attack)',
    },
    {
      title: 'Actions Phase',
      desc: `Points are used to upgrade the character's equipment attributes (Head, Weapon, Toy, etc.). AP are claimed after character level up.`,
    },
  ];

  return (
    <section className={css.glossary}>
      <div className={css.content}>
        <div className={css.infoBlock}>
          <h1 className={css.title}>Batteverse glossary</h1>
          <div className={css.columns}>
            {rowsInfo.map((el, index) => {
              return (
                <div className={css.row} key={index}>
                  <div className={css.firstCol}>
                    <p className={css.text}>{el.title}</p>
                  </div>
                  <div className={css.secondCol}>
                    <p className={css.text}>{el.desc}</p>
                  </div>
                </div>
              );
            })}
            <div className={css.btn}>
              <div className={css.btnPos}>
                <BtnReadMore purple>read more</BtnReadMore>
              </div>
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

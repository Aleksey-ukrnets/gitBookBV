import React from 'react';
import css from '../styles/tabMenu.module.scss';
import BtnGoBack from './buttons/BtnGoBack';
export default function TabMenu({ tabInfo, setTab, tab }) {
   
  return (
    <section className={css.tabContainer}>
      <div className={css.blockTitle}>
        <BtnGoBack />
        <h1 className={css.title}>{tabInfo.title}</h1>
      </div>
      <div className={css.tabs}>
        {console.log(tab)}
        {tabInfo?.tabs.map((el, index) => {
          return (
            <div
              className={css.tab}
              onClick={() => setTab(index)}
              style={{ color: tab === index ? '#FFFFFF' : '#7B9BAC', borderBottom: tab === index && '1px solid white' }}
              key={index}
            >
              {el.title}
            </div>
          );
        })}
      </div>
    </section>
  );
}

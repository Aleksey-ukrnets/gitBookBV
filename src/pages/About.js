import React from 'react';
import css from '../styles/AboutPage/about.module.scss';
import backImg from '../assets/aboutPage/background2.png';
import BtnReadMore from '../components/buttons/BtnReadMore';
import AboutCards from '../components/AboutPage/AboutCards';
import Glossary from '../components/AboutPage/Glossary';
import Docs from '../components/AboutPage/Docs';
import Faq from '../components/AboutPage/FAQ/Faq'
export default function About() {
  return (
    <section>
      <div className={css.sectionAbout}>
        <div className={css.wrapper}>
          <aside className={css.titleBlock}>
            <h1 className={css.title}>Welcome to the world of Batteverse</h1>
            <p className={css.description}>
              Go on the most exciting journey of your life, which will not only
              bring you joy and vivid emotions, but also bring income!
            </p>
            <BtnReadMore>Read More</BtnReadMore>
            <img src={backImg} className={css.backImg} alt="backImg" />
          </aside>
        </div>
      </div>
      <AboutCards />
      <Glossary />
      <Docs />
      <Faq />
    </section>
  );
}
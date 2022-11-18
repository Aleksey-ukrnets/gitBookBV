import React from 'react';
import css from '../styles/AboutPage/about.module.scss';
import backImg from '../assets/aboutPage/background.png';
import BtnReadMore from '../components/buttons/BtnReadMore';
import AboutCards from '../components/AboutPage/AboutCards';
import Glossary from '../components/AboutPage/Glossary';
import Docs from '../components/AboutPage/Docs';
import Faq from '../components/AboutPage/FAQ/Faq';
import MediaStartPage from '../components/AboutPage/MediaStartPage';
// import Roadmap from '../components/AboutPage/Roadmap/Roadmap';
export default function Main() {
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
            <BtnReadMore handler={'/about'}>Read More</BtnReadMore>
            <img src={backImg} className={css.backImg} alt="backImg" />
          </aside>
        </div>
      </div>
      <AboutCards />
      <MediaStartPage />
      <Glossary />
      <Docs />
      {/* <Roadmap /> */}
      <Faq />
    </section>
  );
}

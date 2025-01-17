import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../assets/logo_gold.png';
import burger from '../assets/header/burger.svg';
import cross from '../assets/header/cross.svg';

import css from '../styles/header.module.scss';

import telegram from '../assets/icon_telegram.svg';
import twitter from '../assets/icon_twitter.svg';
import linked from '../assets/linked.svg';
import medium from '../assets/icon_medium.svg';
import discord from '../assets/sideMenu/discord.svg';

const links = [
  { title: 'about', link: 'about' },
  { title: 'gameplay', link: 'gameplay' },
  { title: 'lore', link: 'lore/media' },
  { title: 'docs', link: 'docs' },
];
const footerShare = [
  { img: twitter, link: 'https://twitter.com/BattleVerse_io' },
  {
    img: linked,
    link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof',
  },
  { img: telegram, link: 'https://t.me/battleverse_news' },
  { img: medium, link: 'https://battleverse.medium.com/' },
  { img: discord, link: 'https://discord.com/invite/HFVAnBS9qA' },
];

export default function Header() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navMain = () => navigate('/');

  useEffect(() => {
    let html = document.getElementsByTagName('html')[0].style;
    if (active) {
      html.overflow = 'hidden';
    } else {
      html.overflow = 'visible';
    }
  }, [active]);
  const pathLore = location.pathname
    .split('/')
    .filter((el) => el === 'lore')
    .join('');
  console.log(pathLore);
  const setClassActive = (el) =>
    location.pathname.replace('/', '') === el.link || el.title === pathLore;

  return (
    <header className={`${css.header} ${active && css.active}`}>
      <div className={css.wrapper}>
        <div className={css.burgerImgContainer}>
          <img onClick={navMain} className={css.logo} src={logo} alt="logoBV" />
          <img
            className={css.burger}
            onClick={() => setActive((prev) => !prev)}
            src={active ? cross : burger}
            alt="icon"
          />
        </div>
        <div
          className={css.wrapperHeader}
          style={
            active
              ? { display: 'flex', background: '#091923' }
              : { background: 'transparent' }
          }
        >
          <div className={css.content}>
            {links.map((el, index) => {
              return (
                <Link
                  to={el.link}
                  key={index}
                  onClick={() => setActive(false)}
                  className={`${css.link} ${setClassActive(el) && css.active}`}
                >
                  {el.title}
                </Link>
              );
            })}
          </div>
        </div>
        <footer
          className={`${css.footerBurger} ${active && css.active}`}
          style={{ display: active ? 'flex' : 'none' }}
        >
          {footerShare.map((el, index) => {
            return (
              <a
                key={index}
                href={el.link}
                rel="noreferrer"
                className={css.link}
              >
                <img src={el.img} alt="link" />
              </a>
            );
          })}
        </footer>
      </div>
    </header>
  );
}

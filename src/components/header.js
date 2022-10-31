import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from '../styles/header.module.scss';

export default function Header() {
  const anchors = [
    { title: 'about', link: 'about' },
    { title: 'gameplay', link: 'gameplay' },
    { title: 'lore', link: 'lore' },
    { title: 'docs', link: 'docs' },
    { title: 'FAQ', link: 'FAQ' },
  ];
  
  const location = useLocation();
  // console.log(location.pathname.replace('/', ''))
  return (
    <header className={css.header}>
      <div className={css.content}>
        {anchors.map((el, index) => {
          return (
            <Link
              to={el.link}
              key={index}
              className={`${css.link} ${ location.pathname.replace('/', '') === el.link && css.active}`}
            >
              {el.title}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

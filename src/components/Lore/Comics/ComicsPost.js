import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import { innerComics } from './comicsInfo';
import css from '../../../styles/Lore/comics.module.scss';
import BtnBack from './btnBack';
import arrowGreyLeft from '../../../assets/Lore/Medium/arrowGreyLeft.svg';
import arrowWhiteLeft from '../../../assets/Lore/Medium/arrowWhiteLeft.svg';
import arrowGreyRight from '../../../assets/Lore/Medium/arrowGreyRight.svg';
import arrowWhiteRight from '../../../assets/Lore/Medium/arrowWhiteRight.svg';


export default function ComicsPost() {
  
  const [count, setCount] = useState(1);
  const { episodeId, seasonId } = useParams();

  const increment = (len) => {
    if (count === len) {
      setCount(count);
    } else {
      setCount((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (count === 1) {
      setCount(count);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [count]);
  const el = innerComics[seasonId].find(
    (episode) => episode.link.toLowerCase() === episodeId.toLowerCase()
  );
  
  
  return ( 
    <>
      <div className={css.innerComics}>
        <div className={css.comicsPost} key={el.link}>
          <BtnBack text={'Issues'} />
          <div className={css.wrapper}>
            <h1 className={css.title}>{el.title}</h1>
            {el.imgs.map((img, index) => {
              return (
                <div key={img} className={css.imgBlock}>
                  {count === index + 1 && <img src={img} alt="imgComics" />}
                </div>
              );
            })}
            <div className={css.statusPage}>
              <button className={css.btnPag} onClick={() => decrement()}>
                <img
                  src={count === 1 ? arrowGreyLeft : arrowWhiteLeft}
                  alt="arrow"
                />
              </button>
              <div className={css.numberPage}>
                Comics {el.id}, Page {count}
              </div>
              <button
                className={css.btnPag}
                onClick={() => increment(el.imgs.length)}
              >
                <img
                  src={
                    count === el.imgs.length ? arrowGreyRight : arrowWhiteRight
                  }
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import css from '../../styles/AboutPage/mediaStartPage.module.scss';
import { mediumInfo } from '../Lore/textComponent/mediaInfo';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';
import { Link } from 'react-router-dom';
export default function MediaStartPage() {
  const lastPosts = mediumInfo.slice(mediumInfo.length - 3, mediumInfo.length);
  console.log(lastPosts);
  return (
    <div className={css.mediaMainPage}>
      <div className={css.wrapper}>
        <div className={css.titleBlock}>
          <h1 className={css.title}>media</h1>
          <div className={css.rightRow}>
            <Link to={'/lore/media'} className={css.text}>
              view more
            </Link>
            <ArrowRight className={css.svg} alt="arrow" />
          </div>
        </div>
        <div className={css.cardList}>
          {lastPosts.map((el) => {
            return (
              <div className={css.card} key={el.img}>
                <div className={css.cardContent}>
                  <img src={el.img} alt="img" className={css.img} />
                  <div className={css.cardTitleWrapper}>
                    <h1 className={css.cardTitle}>{el.text}</h1>
                  </div>
                </div>
                <div className={css.btn}>
                  <Link to={`/${el.link}`} className={css.link}>
                    see more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

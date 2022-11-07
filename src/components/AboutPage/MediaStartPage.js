import React from 'react';
import css from '../../styles/Lore/media.module.scss';
import { mediumInfo } from '../Lore/textComponent/mediaInfo';
import arrowRight from '../../assets/arrowRight.svg';
import MediaCard from '../Lore/MediaCard';
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
            <img src={arrowRight} alt="arrow" />
          </div>
        </div>
        <div className={css.cardList}>
          {lastPosts.map((el) => {
            return <MediaCard info={el} key={el.link} />;
          })}
        </div>
      </div>
    </div>
  );
}

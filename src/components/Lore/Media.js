import React, { useState } from 'react';

import css from '../../styles/Lore/media.module.scss';
import MediaCard from './MediaCard';
import Pagination from './Pagination';

import { mediumInfo } from './textComponent/mediaInfo';

export default function Media() {
  const [cardInfo] = useState(mediumInfo);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(12);

  const lastCardInfoIndex = currentPage * infoPerPage;
  const firstCardInfoIndex = lastCardInfoIndex - infoPerPage;
  const currentCardInfo = cardInfo.slice(firstCardInfoIndex, lastCardInfoIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <div className={css.media}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Game modes</h1>
        <div className={css.cardList}>
          {currentCardInfo.map((el, index) => {
            return <MediaCard info={el} key={index} />;
          })}
        </div>
        <Pagination
          paginate={paginate}
          infoPerPage={infoPerPage}
          totalCardInfo={cardInfo.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

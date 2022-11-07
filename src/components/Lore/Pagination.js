import React, { useEffect } from 'react';
import css from '../../styles/Lore/pagination.module.scss';

import arrowGreyLeft from '../../assets/Lore/Medium/arrowGreyLeft.svg';
import arrowWhiteLeft from '../../assets/Lore/Medium/arrowWhiteLeft.svg';
import arrowGreyRight from '../../assets/Lore/Medium/arrowGreyRight.svg';
import arrowWhiteRight from '../../assets/Lore/Medium/arrowWhiteRight.svg';

export default function Pagination({
  infoPerPage,
  totalCardInfo,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCardInfo / infoPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () =>
    pageNumbers.length !== currentPage && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[currentPage]);
  return (
    <div className={css.numbersContent}>
      <button className={css.btnPag}>
        <img
          src={currentPage === 1 ? arrowGreyLeft : arrowWhiteLeft}
          alt="arrow"
          onClick={prevPage}
        />
      </button>
      <ul className={css.numbersList}>
        {pageNumbers.map((number, index) => {
          return (
            <li key={number}>
              <p
                className={css.number}
                style={{
                  background:
                    currentPage === number &&
                    'linear-gradient(140deg, #6534CE 8.91%, #3C1182 90.52%)',
                  color: currentPage === number && '#FFFFFF',
                }}
                onClick={() => paginate(number)}
              >
                {number}
              </p>
            </li>
          );
        })}
      </ul>
      <button className={css.btnPag}>
        <img
          src={
            currentPage === pageNumbers.length
              ? arrowGreyRight
              : arrowWhiteRight
          }
          alt="arrow"
          onClick={nextPage}
        />
      </button>
    </div>
  );
}

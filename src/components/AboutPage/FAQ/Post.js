import React from 'react';
import css from '../../../styles/AboutPage/faq.module.scss';
import plus from '../../../assets/aboutPage/pluss.svg'
import minus from '../../../assets/aboutPage/minus.svg'
export default function Post({ post, clicked, index, toggle }) {
  return (
    <div className={css.post}  onClick={() => toggle(index)}>
      <div className={css.row}>
        <div className={css.rowWrapper}>
          <div className={css.toggle}>
            <img src={clicked === index ? minus : plus} alt='plus' />
          </div>
          <div className={css.question}>{post.question}</div>
        </div>
        {clicked === index && (
          <div className={css.answer}>
            <div className={css.empty}></div>
            <div className={css.answerText}>{post.answer}</div>
          </div>
        )}
      </div>
    </div>
  );
}

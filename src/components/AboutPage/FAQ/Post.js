import React from 'react';
import css from '../../../styles/AboutPage/faq.module.scss';

export default function Post({ post, clicked, setClicked, index, toggle }) {
  return (
    <div className={css.post}>
      <div className={css.row}>
        <div className={css.rowWrapper}>
          <div className={css.toggle} onClick={() => toggle(index)}>
            x
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

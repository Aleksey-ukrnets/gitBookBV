import React, { useState } from 'react';

import css from '../../../styles/AboutPage/faq.module.scss';
import { posts } from './FaqInfo';
import Post from './Post';

import littleIcon from '../../../assets/aboutPage/little_icon.png';
import bigIcon from '../../../assets/aboutPage/big_icon.png';
import shroomQuestion from '../../../assets/aboutPage/shroomQuestion.png';



export default function Faq() {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className={css.faqMain}>
      <div className={css.wrapper}>
        <h1 className={css.title}>FAQ</h1>
        <div className={css.Container}>
          <div className={css.postsContainer}>
            {posts.map((post, index) => {
              return (
                <Post
                  post={post}
                  key={index}
                  clicked={clicked}
                  toggle={toggle}
                  index={index}
                />
              );
            })}
          </div>
          <div className={css.img}>
            <div className={css.imgContainer}>
              <div className={css.effect}></div>
              <img
                className={css.shroomQuestion}
                src={shroomQuestion}
                alt="shroomQuestion"
              />
              <img
                className={css.bigIcon}
                src={bigIcon}
                alt="bigIconQuestion"
              />
              <img
                className={css.littleIcon}
                src={littleIcon}
                alt="littleIconQuestion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

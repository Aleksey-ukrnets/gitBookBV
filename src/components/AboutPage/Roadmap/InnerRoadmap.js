import React from 'react';

export default function InnerRoadmap({ el, index, tab, css }) {
  const newIndex = index + 1;
  const whatIsColor = () =>
    newIndex === 1
      ? '#7c3eff'
      : newIndex === 2
      ? '#4cff9e'
      : newIndex === 3
      ? '#7fe8ff'
      : null;
  // console.log(el.q_blocks);
  return (
    <>
      {tab === newIndex && (
        <div className={css.cardList}>
          {el.q_blocks.map((item, indexInner) => {
            return (
              <div key={indexInner} className={css.card} style={{border: indexInner + 1 === 4 && tab === 1 && '2px solid rgb(124, 62, 255)'}}>
                <div className={css.cardWrapper}>
                  <h1
                    style={{
                      color: item.info === null ? '#07161F' : whatIsColor(),
                    }}
                    className={css.title}
                  >
                    Q{indexInner + 1}
                  </h1>
                  {item.info ? (
                    item.info.map((el) => {
                      return (
                        <p key={el} className={css.text}>
                          {el}
                        </p>
                      );
                    })
                  ) : (
                    <div className={css.line}>
                      <div></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

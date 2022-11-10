import React, { useState } from 'react';
import css from '../../../styles/AboutPage/roadmap.module.scss';

import InnerRoadmap from './InnerRoadmap';
import { roadmap } from './roadmapinfo';

export default function Roadmap() {
  const [tab, setTab] = useState(1);

  return (
    <div className={css.roadmap} id="Roadmap">
      <div className={css.wrapper}>
        <h1 className={css.roadTitle}>ROADMAP</h1>

        <div className={css.years}>
          {[2021, 2022, 2023, 2024].map((item, index) => {
            return (
              <div
                onClick={() => item !== 2024 && setTab(index + 1)}
                key={item}
              >
                <span className={tab === index + 1 ? css.active : ''}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>

        <div className={css.blockinner}>
          {roadmap.map((el, index) => {
            return (
              <InnerRoadmap
                key={index}
                el={el}
                index={index}
                tab={tab}
                css={css}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

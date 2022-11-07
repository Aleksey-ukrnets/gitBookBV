import React, { useState } from 'react';
import TabMenu from '../components/TabMenu';
import css from '../styles/AboutProject/aboutProj.module.scss';
import Intro from '../components/AboutProject/Intro';
import Team from '../components/AboutProject/Team';
import { useScrollTop } from '../Hooks/useScrollTop';
const tabInfo = {
  title: 'About the project',
  tabs: [{ title: 'Intro' }, { title: 'Team' }],
};

export default function AboutProject() {
  const [tab, setTab] = useState(0);
  useScrollTop()
  return (
    <div>
      <TabMenu tabInfo={tabInfo} setTab={setTab} tab={tab} />
      <div className={css.wrapper}>{tab === 0 ? <Intro /> : <Team />}</div>
    </div>
  );
}

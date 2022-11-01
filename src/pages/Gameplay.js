import React, { useState } from 'react';
import Characters from '../components/Gameplay/Characters';
import GameMode from '../components/Gameplay/GameMode';
import TabMenu from '../components/TabMenu';
import css from '../styles/Gameplay/gameplay.module.scss';
const tabInfo = {
  title: 'gameplay',
  tabs: [{ title: 'Characters' }, { title: 'Game modes' }],
};

export default function Gameplay() {
  const [tab, setTab] = useState(0);
  return (
    <div className={css.gameplay}>
      <TabMenu tabInfo={tabInfo} setTab={setTab} tab={tab} />
      <div className={css.wrapper}>
        {tab === 0 ? <Characters /> : <GameMode />}
      </div>
    </div>
  );
}

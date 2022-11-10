import React, { useState } from 'react';
import TabMenu from '../components/TabMenu';
import css from '../styles/AboutPage/glossary.module.scss';

import { Outlet } from 'react-router';
import { useScrollTop } from '../Hooks/useScrollTop';

const tabInfo = {
  title: 'Lore',
  tabs: [{ title: 'media' }, { title: 'glossary' }, { title: 'comics' }],
};

export default function Lore() {
  const [tab, setTab] = useState(0);
  useScrollTop()
  return (
    <div className={css.glossary} style={{ margin: '0' }}>
      <TabMenu tabInfo={tabInfo} setTab={setTab} tab={tab} lore />
      <div className={css.wrapper}>
        <Outlet />
      </div>
    </div>
  );
}

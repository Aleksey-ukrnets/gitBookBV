import React, {  useState } from 'react';
import Dao from '../components/Docs/Dao';
import Takenomics from '../components/Docs/Takenomics';
import TabMenu from '../components/TabMenu';
import css from '../styles/Docs/docsMain.module.scss';
import { useScrollTop } from '../Hooks/useScrollTop';
const tabInfo = {
  title: 'docs',
  tabs: [{ title: 'tokenomics' }, { title: 'dao' }],
};

export default function Docs() {
  const [tab, setTab] = useState(0);
  useScrollTop()
  return (
    <div>
      <TabMenu tabInfo={tabInfo} setTab={setTab} tab={tab} />
      <div className={css.wrapper}>{tab === 0 ? <Takenomics /> : <Dao />}</div>
    </div>
  );
}

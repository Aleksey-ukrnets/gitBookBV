import { NavLink } from 'react-router-dom';
import css from '../styles/tabMenu.module.scss';
import BtnGoBack from './buttons/BtnGoBack';
export default function TabMenu({ tabInfo, setTab, tab, lore }) {
  const wrapToLink = (jsx, to) => (lore ? <NavLink key={to} to={to}>{jsx}</NavLink> : jsx);

  return (
    <section className={css.tabContainer}>
      <div className={css.blockTitle}>
        <BtnGoBack />
        <h1 className={css.title}>{tabInfo.title}</h1>
      </div>
      <div className={css.tabs}>
        {tabInfo?.tabs.map((el, index) => {
          return wrapToLink(
            <div
              className={css.tab}
              onClick={() => setTab(index)}
              style={{
                color: tab === index && '#FFFFFF',
                borderBottom: tab === index && '1px solid white',
              }}
              key={index}
            >
              {el.title}
            </div>,
            el.title
          );
        })}
      </div>
    </section>
  );
}

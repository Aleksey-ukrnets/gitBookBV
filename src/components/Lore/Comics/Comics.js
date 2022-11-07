
import css from '../../../styles/Lore/media.module.scss';
import MediaCard from '../MediaCard';
import season1 from '../../../assets/Lore/Comics//Season I/0.png';
import season2 from '../../../assets/Lore/Comics/Season II/0.png';
import season3 from '../../../assets/Lore/Comics/Season III/0.JPG';

const seasons = [
  { text: 'Season I', img: season1, link: 'lore/comics/season1' },
  { text: 'Season II', img: season2, link: 'lore/comics/season2' },
  { text: 'Season 3', img: season3, link: 'lore/comics/season3'},
];

export default function Comics() {
  return (
    <div className={css.comics}>
      <div className={css.wrapper}>
        <div className={css.cardList}>
          {seasons.map((el) => (
            <MediaCard info={el} key={el.text} comics />
          ))}
        </div>
      </div>
    </div>
  );
}

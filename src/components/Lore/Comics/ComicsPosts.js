import BtnBack from './btnBack';
import css from '../../../styles/Lore/comics.module.scss';
import cssnew from '../../../styles/Lore/media.module.scss';
import { seasons } from './comicsInfo';
import MediaCard from '../MediaCard';
import {  useParams } from 'react-router';


export default function ComicsPosts() {
  // const [tab, setTab] = useState(0);
  const {seasonId} = useParams()

  return (
    <div className={css.posts}>
      <div className={cssnew.wrapper}>
      <BtnBack text={'Seasons'} />
        <div className={cssnew.cardList}>
          {seasons[seasonId].map((el) => (
            <MediaCard info={el} key={el.value} comics />
          ))}
        </div>
      </div>
    </div>
  );
}

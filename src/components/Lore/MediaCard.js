import { Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import css from '../../styles/Lore/media.module.scss';

export default function MediaCard({ info, comics,className }) {

  const onlyWidth = useWindowWidth();


  let postHeight = onlyWidth >= 1024 ? '466px' : onlyWidth >= 426 ? '300px' : '466px';
  return (
    <div className={css.card}>
      <div className={css.cardContent} style={comics && { height: postHeight }}>
        <img
          src={info.img}
          alt="img"
          className={`${css.img} ${className}`}
          style={comics && { borderRadius: '0px' }}
        />
        <div className={css.cardTitleWrapper} style={{borderRadius: comics && '0'}} >
          <h1 className={css.cardTitle}>{info.text}</h1>
        </div>
      </div>
      <div className={css.btn}>
        {!comics ? (
          <a
            className={css.link}
            href={`${info.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            read more
          </a>
        ) : (
          <Link to={`/${info.link}`} className={css.link}>
            see more
          </Link>
        )}
      </div>
    </div>
  );
}

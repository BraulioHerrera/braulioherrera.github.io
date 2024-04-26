import { TMarvelCharacter } from '@types';

import styles from './style.module.css';
import { Link } from 'react-router-dom';

type Props = {
  data: TMarvelCharacter;
};

export function CharacterCard({ data }: Props) {
  const {
    id,
    name,
    thumbnail: { extension, path },
  } = data;

  return (
    <Link to={`/${id}`} className="block border border-cyan-800">
      <div className="aspect-square group overflow-hidden">
        <img
          className="object-cover h-full w-full group-hover:scale-125 group-hover:rotate-3 transition-all duration-500"
          src={`${path}.${extension}`}
          alt=""
        />
      </div>
      <div className={`${styles.NameContainer} bg-cyan-800 p-4 relative font-mono`}>{name}</div>
    </Link>
  );
}

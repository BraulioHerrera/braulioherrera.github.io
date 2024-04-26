import { TMarvelComic } from '@types';

import styles from './style.module.css';

type Props = {
  imgSrc: string;
  name: string;
  description: string;
  comics: TMarvelComic;
};

export function CharacterView({ description, imgSrc, name, comics }: Props) {
  const { items } = comics;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border border-cyan-800">
      <div className="aspect-square border-r border-cyan-800">
        <img className="object-contain h-full w-full" src={imgSrc} alt="" />
      </div>
      <div
        className={`${styles.CharacterData} md:aspect-square p-4 font-mono gap-4 overflow-hidden`}
      >
        <div>
          <h1 className="text-4xl font-extrabold">{name}</h1>
          <hr className="border-cyan-800" />
        </div>
        <p>{description || 'Sin descripción'}</p>
        {Boolean(items.length) && (
          <>
            <div>
              <h2 className="text-xl">Comics</h2>
              <hr className="border-cyan-800" />
            </div>
            <div className="overflow-auto">
              <ul>
                {items.map((item, index) => {
                  const { name } = item;
                  const key = `comic-item-${index}`;
                  return (
                    <>
                      <li className="ml-2" key={key}>
                        {name}
                      </li>
                      <hr className="border-cyan-800 w-20" />
                    </>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

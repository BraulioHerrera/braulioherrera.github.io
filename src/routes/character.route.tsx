import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import { marvelCharacter } from '@api';
import { CharacterView } from '@components/CharacterView/CharacterView';

export function CharacterRoute() {
  const { characterId } = useParams<{ characterId: string }>();

  const { data, isLoading, error } = useQuery(['marvel-character', characterId], marvelCharacter);

  if (!data || error) return null;

  if (isLoading) return <div>Is Loading</div>;

  const { results } = data;

  const characterData = _.first(results);

  if (!characterData) return null;

  const {
    name,
    description,
    thumbnail: { extension, path },
    comics,
  } = characterData;
  const imgSrc = `${path}.${extension}`;

  return <CharacterView name={name} description={description} imgSrc={imgSrc} comics={comics} />;
}

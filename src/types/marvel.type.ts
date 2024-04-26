export type TMarvelThumbnail = {
  path: string;
  extension: string;
};

export type TMarvelComicItem = {
  resourceURI: string;
  name: string;
};

export type TMarvelComic = {
  available: number;
  collectionURI: string;
  items: TMarvelComicItem[];
};

export type TMarvelCharacter = {
  id: string;
  name: string;
  description: string;
  thumbnail: TMarvelThumbnail;
  comics: TMarvelComic;
};

export type TMarvelCharactersResponse = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: TMarvelCharacter[];
};

export type TMarvelFilters = {
  offset: number;
  limit: number;
};

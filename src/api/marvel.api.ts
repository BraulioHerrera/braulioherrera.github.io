import axios, { AxiosError } from 'axios';

import { TMarvelCharactersResponse } from '@types';
import { QueryFunctionContext } from 'react-query';

export const marvelApiClient = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  headers: {
    'Content-type': 'application/json',
    Accept: '*/*',
  },
  params: {
    apikey: 'c9eca072f5cfc5ae4c1b5b03972b55ec',
    ts: '1',
    hash: '0ba8582e20164f36896690631371a278',
  },
});

export async function marvelHomeCharacters({ queryKey }: QueryFunctionContext<[string, number]>) {
  const [, offset] = queryKey;

  const params = new URLSearchParams({
    offset: offset.toString(),
  });

  const path = `/characters?${params}`;

  try {
    const request = await marvelApiClient.get<{ data: TMarvelCharactersResponse }>(path);
    return request.data.data;
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
}

export async function marvelCharacter({
  queryKey,
}: QueryFunctionContext<[string, string | undefined]>) {
  const [, characterId] = queryKey;

  if (!characterId) return undefined;

  const path = `/characters/${characterId}`;

  try {
    const request = await marvelApiClient.get<{ data: TMarvelCharactersResponse }>(path);
    return request.data.data;
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
}

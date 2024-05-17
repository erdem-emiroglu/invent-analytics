'use server';

import _ from 'lodash';

import { BASE_PARAMS, INITIAL_SEARCH } from '@/constants';

export type ContentResponse = {
  Response: `${boolean}`;
  Search: SearchItem[];
  totalResults: `${number}`;
};

export type SearchItem = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type Params = {
  apikey?: string;
  page?: string;
  s?: string;
  y?: string;
  type?: string;
};

export const fetchContent = async (params?: Params): Promise<ContentResponse> => {
  const baseUrl = process.env.BASE_URL;
  const query = new URLSearchParams({
    ...BASE_PARAMS,
    s: INITIAL_SEARCH,
    ..._.omitBy(params, _.isNil),
  });

  const url = `${baseUrl}?${query}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

'use server';

import { BASE_PARAMS } from '@/constants';

export type RatingProps = {
  Source: string;
  Value: `${number}/${number}` | `${number}%`;
};

export type DetailResponse = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string | null;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingProps[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  totalSeasons?: string;
  Response: string;
};

export const fetchDetails = async (id: string): Promise<DetailResponse> => {
  const baseUrl = process.env.BASE_URL;
  const query = new URLSearchParams({
    ...BASE_PARAMS,
    i: id,
  });

  const url = `${baseUrl}?${query}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

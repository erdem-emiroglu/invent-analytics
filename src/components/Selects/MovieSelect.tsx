'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import BaseSelect from '@/components/Selects/base';

enum MovieType {
  All = 'all',
  Movie = 'movie',
  Series = 'series',
  Episode = 'episode',
}

const MovieSelect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const type = (params.get('type') as MovieType) || MovieType.All;

  const options = [
    { value: MovieType.All, label: 'All' },
    { value: MovieType.Movie, label: 'Movie' },
    { value: MovieType.Series, label: 'Series' },
    { value: MovieType.Episode, label: 'Episode' },
  ];

  const onSelect = (newType: MovieType) => {
    const newParams = new URLSearchParams(params);
    newParams.delete('page');
    if (newType === MovieType.All) {
      newParams.delete('type');
    } else {
      newParams.set('type', newType.toString());
    }
    router.push(`?${newParams.toString()}`);
  };

  return <BaseSelect value={type} options={options} onSelect={onSelect} />;
};

export default MovieSelect;

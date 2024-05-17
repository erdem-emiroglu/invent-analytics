import Link from 'next/link';

import { fetchContent, SearchItem } from '@/api/fetchContent';
import BaseDatePicker from '@/components/DatePicker';
import BaseSearch from '@/components/Search';
import MovieSelect from '@/components/Selects/MovieSelect';
import BaseTable from '@/components/Tables/base';
import { Column } from '@/components/Tables/base/BaseTable.types';
import { getParams } from '@/store/paramStore';

const ContentTable = async () => {
  const { page, search, year, type } = getParams();
  const params = { page, s: search, y: year, type };
  const { Search: data, totalResults } = await fetchContent(params);

  const columns = [
    { key: 'Title', label: 'Title', width: "50%", render: (item) => <Link href={`/details/${item.imdbID}`}>{item.Title}</Link> },
    { key: 'Year', label: 'Year', width: "20%" },
    { key: 'Type', label: 'Type', width: "15%" },
    { key: 'imdbID', label: 'IMDB ID', width: "15%" },
  ] satisfies Column<SearchItem>[];

  return (
    <BaseTable columns={columns} data={data} totalData={Number(totalResults)}>
      <MovieSelect />
      <BaseDatePicker />
      <BaseSearch />
    </BaseTable>
  );
};

export default ContentTable;

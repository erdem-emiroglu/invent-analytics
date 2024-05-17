import serverContext from '@/store/base';

type Params = {
  search?: string;
  page?: string;
  year?: string;
  type?: string;
};

export const [getParams, setParams] = serverContext({} as Params);

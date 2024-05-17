import { DetailResponse } from '@/api/fetchDetails';
import serverContext from '@/store/base';

export const [getDetails, setDetails] = serverContext({} as DetailResponse);

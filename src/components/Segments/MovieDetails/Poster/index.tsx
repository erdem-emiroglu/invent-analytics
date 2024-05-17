import Image from 'next/image';

import { getDetails } from '@/store/detailStore';
import { checkFalsy } from '@/utils/checkFalsy';

const PosterSegment = () => {
  const details = getDetails();

  if (checkFalsy([details.Poster, details.Title])) return null;

  return (
    <Image src={details.Poster} alt={details.Title} width={300} height={400} priority={true} fetchPriority="high" />
  );
};

export default PosterSegment;

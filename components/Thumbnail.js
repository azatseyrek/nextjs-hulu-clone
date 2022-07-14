import {ThumbUpIcon} from '@heroicons/react/outline';
import Image from 'next/image';

const Thumbnail = ({key, result}) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  //   console.log(result);
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
      <Image
        className="rounded-lg  "
        alt={result.name}
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-semibold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center uppercase text-gray-600 opacity-0 transition-all duration-100  group-hover:opacity-100">
          {result.media_type ? result.media_type : null} ▫️{' '}
          {result.release_date || result.first_air_date} ▫️{' '}
          {<ThumbUpIcon className="h-5 mx-2 text-gray-400" />}{' '}
          {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;

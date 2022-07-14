import Thumbnail from './Thumbnail';

const Results = ({results}) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-col-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

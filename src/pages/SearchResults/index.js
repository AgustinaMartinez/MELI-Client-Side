import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useData from '../../context/data/data.context';
import Result from '../../components/Result/Result.component';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.component';
import './_searchResults.scss';

const SearchResults = () => {
  const { data } = useData();
  const [dataID, setDataID] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [results, setResults] = useState({
    status: 'pending',
    data: null,
  });

  useEffect(() => {
    const setResultsData = () => {
      if (data) {
        setResults({
          status: 'success',
          data: data,
        });
      } else {
        setResults({
          status: 'error',
          data: null,
        });
      }
    }
    setResultsData();
  }, [data]);

  const handleOnClick = id => {
    setDataID(id);
    setRedirect(true);
  }

  const resultsList = results?.data?.items.map((item, index) => (
    <Result
      key={index}
      alt={item?.title}
      image={item?.picture}
      price={`$ ${item?.price?.amount}`}
      title={item?.title}
      condition={item?.condition}
      onClick={() => handleOnClick(item?.id)}
    />
  ));

  return (
    <div className="searchResults">
      <Breadcrumb breadcrumb={results?.data?.categories[0]}/>
      <div className="searchResults__box">
        {results?.status === 'pending' ? <span>Loading...</span> : (
          results?.status === 'success' && results?.data ? resultsList : (
            results?.status === 'error' ? <span>Result not found</span> : ''
          )
        )}
      </div>
      {redirect && <Redirect to={`/items/${dataID}`}/>}
    </div>
  );
}

export default SearchResults;

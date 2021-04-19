import { useState, useEffect } from 'react';
import { getDetailData } from '../../services';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.component';
import './_detailPage.scss';

const Detail = () => {
  const [results, setResults] = useState({
    status: 'pending',
    data: null,
  });

  useEffect(() => {
    const url = window.document.baseURI.split('/');
    const id = url[4];

    const getData = async () => {
      try{
        const data = await getDetailData(id);
        if (data) {
          setResults({
            status: 'success',
            data,
          });
        } else {
          setResults({
            status: 'error',
            data: null,
          });
        }
      } catch (err){
        console.log('Error al hacer la búsqueda: ', err);
      }
    }
    getData();
  }, []);

  const resultDetail = (
    <ProductDetail
      alt={results?.data?.item?.title}
      src={results?.data?.item?.picture}
      condition={results?.data?.item?.condition}
      sold_quantity={results?.data?.item?.sold_quantity}
      title={results?.data?.item?.title}
      price={`$ ${results?.data?.item?.price?.amount}`}
      decimal={results?.data?.item?.price?.decimals}
      description={results?.data?.item?.description}
    />
  );

  return (
    <div className="detail">
      <div className="detail__box">
      {results?.status === 'pending' ? <span>Loading...</span> : (
        results?.status === 'success' && results?.data ? resultDetail : <span>Result not found</span>
      )}
      </div>
    </div>
  );
}

export default Detail;

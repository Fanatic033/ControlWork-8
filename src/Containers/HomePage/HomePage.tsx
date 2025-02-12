import {useCallback, useEffect, useState} from 'react';
import {Quote, QuotesList} from '../../types.ts';
import AxiosApi from '../../AxiosApi.tsx';
import QuoteList from '../../Components/QuoteList/QuoteList.tsx';
import CategoryList from '../../Components/CategoryList/CategoryList.tsx';
import {useParams} from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner.tsx';

const HomePage = () => {
  const {category} = useParams();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);

  const getAxiosQuotes = useCallback(async () => {
    try {
      setLoading(true);
      let url = '/quotes.json';
      if (category) {
        url += `?orderBy="category"&equalTo="${category}"`;
      }
      const response = await AxiosApi.get<QuotesList>(url);
      const data = response.data;

      if (data !== null) {
        const quotesList: Quote[] = Object.keys(data).map(id => ({
          ...data[id],
          id: id
        }));
        setQuotes(quotesList);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    void getAxiosQuotes();
  }, [getAxiosQuotes]);
  if (loading) {
    return (<div className="d-flex justify-content-center align-items-center" style={{height: '310px'}}>
      <Spinner/>
    </div>);
  }
  return (
    <>
      <div>
        <div>
          <CategoryList/>
        </div>
        {quotes.length === 0 ? <h1 className="text-center">НЕТ ЦИТАТ</h1>
          : <QuoteList quotes={quotes} getUpdate={getAxiosQuotes}/>
        }
      </div>
    </>

  );
};

export default HomePage;
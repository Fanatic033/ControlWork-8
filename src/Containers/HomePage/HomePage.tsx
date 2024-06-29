import {useCallback, useEffect, useState} from 'react';
import {Quote} from '../../types.ts';
import AxiosApi from '../../AxiosApi.tsx';
import QuoteList from '../../Components/QuoteList/QuoteList.tsx';
import CategoryList from '../../Components/CategoryList/CategoryList.tsx';

const HomePage = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const getAxiosQuotes = useCallback(async () => {
    try {
      const response = await AxiosApi.get<{ [key: string]: Quote }>('/quotes.json');
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
    }
  }, []);

  useEffect(() => {
    void getAxiosQuotes();
  }, [getAxiosQuotes]);

  return (
    <div className="container-fluid d-flex  align-items-center justify-content-evenly" >
      <CategoryList/>
      <QuoteList quotes={quotes}/>
    </div>
  );
};

export default HomePage;
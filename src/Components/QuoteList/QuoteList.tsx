import {Quote} from '../../types.ts';
import {FC} from 'react';
import QuoteItem from '../QuoteItem/QuoteItem.tsx';
import {useParams} from 'react-router-dom';

interface Props {
  quotes: Quote[];
  getUpdate: () => void;
}

const QuoteList: FC<Props> = ({quotes, getUpdate,}) => {
  const {category} = useParams<{ category: string }>();

  return (
    <div className={'container'}>
      <h2 className='text-center mb-3'>{category ? category.toUpperCase() : 'All'}</h2>
      {quotes.map((quote) => (
        <QuoteItem quote={quote} key={quote.id} getUpdate={getUpdate}/>
      ))}
    </div>
  );
};

export default QuoteList;
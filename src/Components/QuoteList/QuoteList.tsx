import {Quote} from '../../types.ts';
import {FC} from 'react';
import QuoteItem from '../QuoteItem/QuoteItem.tsx';

interface Props {
  quotes: Quote[];
  getUpdate: () => void;
}

const QuoteList: FC<Props> = ({quotes, getUpdate,}) => {
  return (
    <div style={{flexBasis: '50%'}} className={'mt-5'}>
      {quotes.map((quote) => (
        <QuoteItem quote={quote} key={quote.id} getUpdate={getUpdate}/>
      ))}
    </div>
  );
};

export default QuoteList;
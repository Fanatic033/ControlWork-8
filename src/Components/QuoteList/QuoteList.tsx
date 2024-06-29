import {Quote} from '../../types.ts';
import {FC} from 'react';
import QuoteItem from '../QuoteItem/QuoteItem.tsx';

interface Props {
  quotes: Quote[];
}

const QuoteList: FC<Props> = ({quotes}) => {
  return (
    <div style={{flexBasis: '50%'}} className={'mt-5'}>
      <h3 className={'mb-4'}>Category</h3>
      {quotes.map((quote) => (
        <QuoteItem quote={quote} key={quote.id}/>
      ))}
    </div>
  );
};

export default QuoteList;
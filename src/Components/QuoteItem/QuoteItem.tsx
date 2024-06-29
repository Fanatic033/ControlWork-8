import {Quote} from '../../types.ts';
import {FC} from 'react';

interface Props {
  quote: Quote;
}

const QuoteItem: FC<Props> = ({quote}) => {
  return (
    <>
      <div className="card mb-3">
        <h5 className="card-header">Author {quote.author}</h5>
        <div className="card-body">
          <p className="card-text">{quote.message}</p>
        </div>
        <div className={'card-footer'}>
          <button type='button' className='btn btn-warning me-3'>Edit</button>
          <button type='button' className='btn btn-danger'>Delete</button>
        </div>
      </div>
    </>
  );
};

export default QuoteItem;
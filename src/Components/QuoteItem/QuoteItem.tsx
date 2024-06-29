import {Quote} from '../../types.ts';
import {FC} from 'react';
import axiosApi from '../../AxiosApi.tsx';
import {useNavigate} from 'react-router-dom';

interface Props {
  quote: Quote;
  getUpdate: () => void;
}

const QuoteItem: FC<Props> = ({quote, getUpdate}) => {
  const navigate = useNavigate();
  const getDelete = async () => {
    try {
      await axiosApi.delete(`/quotes/${quote.id}.json`);
      getUpdate();
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/');
    }
  };
  return (
    <>
      <div className="card mb-3">
        <h5 className="card-header">Author {quote.author}</h5>
        <div className="card-body">
          <p className="card-text">{quote.message}</p>
        </div>
        <div className={'card-footer'}>
          <button type="button" className="btn btn-warning me-3">Edit</button>
          <button type="button" className="btn btn-danger" onClick={getDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default QuoteItem;
import {ChangeEvent, FormEvent, useState} from 'react';
import {QuoteMutation} from '../../types.ts';
import AxiosApi from '../../AxiosApi.tsx';
import {useNavigate} from 'react-router-dom';

const NewQuotePage = () => {
  const [form, setForm] = useState<QuoteMutation>({
    category: '',
    author: '',
    message: '',
  });
  const navigate = useNavigate();
  const onFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AxiosApi.post('/quotes.json', form);
    } catch (error) {
      console.log(error);
    }
    {
      navigate('/');
    }
  };
  return (
    <>
      <form className="container" onSubmit={onSave}>
        <h2 className="text-center mt-5">Add new Quote</h2>
        <div className="input-group">
          <label className="mt-5 w-100">
            Категории
            <select
              name="category"
              className="form-select form-select mt-1"
              value={form.category}
              onChange={onFieldChange}
            >
              <option value="" disabled>Выберите Категорию</option>
              <option value="star-wars">Star Wars</option>
              <option value="famous-people">Famous people</option>
              <option value="saying">Saying</option>
              <option value="humour">Humour</option>
              <option value="motivational">Motivational</option>
            </select>
          </label>
        </div>
        <div className="input-group">
          <label className="mt-5">
            Author
            <input
              className="w-100"
              type="text"
              name="author"
              placeholder="enter a Author"
              value={form.author}
              onChange={onFieldChange}
            />
          </label>
        </div>
        <div className="input-group">
          <label className="mt-5">
            Message
            <textarea
              className="w-100"
              name="message"
              placeholder="enter a message"
              value={form.message}
              onChange={onFieldChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3 px-5">Save</button>
      </form>
    </>
  );
};

export default NewQuotePage;
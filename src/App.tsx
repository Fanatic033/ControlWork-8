import Header from './Components/Header/Header';
import { Route, Routes} from 'react-router-dom';
import NewQuotePage from './Containers/NewQuotePage/NewQuotePage';
import CategoryList from './Components/CategoryList/CategoryList';

const App = () => (
  <>
    <Header/>
    <main>
      <CategoryList/>
      <Routes>
        <Route path="add-quote" element={<NewQuotePage/>}/>
      </Routes>
    </main>

  </>
);

export default App;

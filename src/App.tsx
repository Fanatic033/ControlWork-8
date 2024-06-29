import Header from './Components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import NewQuotePage from './Containers/NewQuotePage/NewQuotePage';
import HomePage from './Containers/HomePage/HomePage.tsx';

const App = () => {

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="quotes/:category" element={<HomePage/>}/>
          <Route path="add-quote" element={<NewQuotePage/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;

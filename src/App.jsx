import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components';
import Home from './pages/Home';
import './App.scss';
import Articles from './pages/Articles';
import Cases from './pages/Cases';

function App() {
  return (
    <div className='page-wrapper page-overlay'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/article/:id' element={<Articles />} />
          <Route path='/cases' element={<Cases />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

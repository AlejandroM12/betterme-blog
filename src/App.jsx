import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <div className='page-wrapper page-overlay'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

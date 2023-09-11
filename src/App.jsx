import { Header } from './components';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='page-wrapper page-overlay'>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Main.scss';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
   <BrowserRouter>
    <Routes></Routes>
   </BrowserRouter>
  );
}

export default App;

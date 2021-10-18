import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Main.scss';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// REF.
// https://www.figma.com/file/z6xz8fkVzn0hXD5TfWUuYy/Prot%C3%B3tipo?node-id=0%3A1

function App() {
  return (
   <BrowserRouter>
    <Routes></Routes>
   </BrowserRouter>
  );
}

export default App;

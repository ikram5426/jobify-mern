import {Fragment} from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import { Dashboard, Error, Register } from './pages';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' exact element={<LandingPage/>} />
        <Route path='/*' exact element={<Error/>} />
        <Route path='/register' exact element={<Register/>} />
        <Route path='/dashboard' exact element={<Dashboard/>} />
      </Routes>
    </Fragment>
  );
}

export default App;

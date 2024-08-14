import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/navigatebuttons/Menu';
import Qr from './components/qr/Qr';
import UniqueId from './components/uniqueid/UniqueId';
import List from './components/list/List';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>} >
        <Route path='/menu' element={<Menu/>} />
        <Route path='/qr' element={<Qr/>} />
        <Route path='/unique' element={<UniqueId/>} />
        <Route path='/list' element={<List/>} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Main from '../pages/Main';
import Pokemons from '../pages/Pokemons';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="pokemons" >
            <Route index element={ <Pokemons/> }/>
            <Route path=':pokeCode' element={null}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import './App.css';
import Home from './Components/Home';
import MoviesList from './Components/Movies/MoviesList';
import Login from './Components/Accounts/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='movies' element = {<MoviesList/>}></Route>
          <Route path='login' element = {<Login/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import './App.css';
import Home from './Components/Home';
import MoviesList from './Components/Movies/MoviesList';
import Login from './Components/Accounts/Login';
import Details from './Components/Movies/Details';
import Edit from './Components/Movies/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<MoviesList />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path='login' element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

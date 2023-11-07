import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { FaBook } from 'react-icons/fa';
import {FaSteam} from 'react-icons/fa'
import './App.css';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Game from './pages/Game';
import Book from './pages/Book';
import MovieDetail from './pages/MovieDetail';
import GameDetail from './pages/GameDetail';
import BookDetail from './pages/BookDetail';
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 16</p>
      </header>
      <div className="scrollable-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/game" element={<Game />} />
          <Route path="/book" element={<Book />} />
          <Route path="/movie/detail/:id" element={<MovieDetail />} />
          <Route path="/game/detail/:id" element={<GameDetail />} />
          <Route path="/book/detail/:id" element={<BookDetail />} />
        </Routes>
      </div>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <FaSteam className="icon" /> Game
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <FaBook className="icon" /> Book
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;

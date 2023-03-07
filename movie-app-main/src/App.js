import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import MoviePage from './components/pages/MoviePage/MoviePage';
import SearchPage from './components/pages/SearchPage/SearchPage';

const App = () => {

  return (
    <>
        <BrowserRouter>
             <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/movie/:id' element={<MoviePage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
             </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
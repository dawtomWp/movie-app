import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMoviesData } from '../../../hooks/useMoviesData';
import MainTemplate from '../../templates/MainTemplate';

const MoviePage = () => {
  const params = useParams();
  const {movies:movie,loading,error} = useMoviesData(`/movie/${params.id}`)
  
  console.log(movie);

  if(!movie) return;

  return (
    <MainTemplate>
      <h2>{movie.original_title}</h2>
    </MainTemplate>
  )
}

export default MoviePage
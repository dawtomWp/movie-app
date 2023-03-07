import React from 'react';
import * as Styled from './styles';

const FeaturedMovie = ({featured}) => {
  console.log(featured);
  return (
    <Styled.Wrapper>
        <img src={`https://image.tmdb.org/t/p/w500/${featured.poster_path}`} alt={featured.title}/>
        <div>
           <h2>{featured.title}</h2>
           <em>{featured.original_title}</em>
           <p>{featured.overview}</p>
           <Styled.Box>
              <span>Vote rating: {featured.vote_average}</span>
              <span>Vote count: {featured.vote_count}</span>
           </Styled.Box>
        </div>
       
    </Styled.Wrapper>
  )
}

export default FeaturedMovie
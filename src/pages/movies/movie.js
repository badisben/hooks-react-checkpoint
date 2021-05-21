
import {useState} from "react";
import Filter from '../../component/filter/filter';
import MovieList from "../../component/movieliste/liste";

const moviesList = [
    {
        title: 'Movie 01 ',
        description: 'Movie description 01',
        rating: 9,
        posterurl: 'url 01'
    },
    {
        title: 'Movie 02 ',
        description: 'Movie description 02',
        rating: 6,
        posterurl: 'url 02'
    },
    {
        title: 'Movie 03 ',
        description: 'Movie description 03',
        rating: 4,
        posterurl: 'url 03'
    },
    {
        title: 'Movie 04 ',
        description: 'Movie description 04',
        rating: 9,
        posterurl: 'url 04'
    },
    {
      title: 'Movie 05 ',
      description: 'Movie description 04',
      rating: 9,
      posterurl: 'url 04'
  },
  {
    title: 'Movie 06 ',
    description: 'Movie description 01',
    rating: 9,
    posterurl: 'url 01'
},
{
    title: 'Movie 07 ',
    description: 'Movie description 02',
    rating: 6,
    posterurl: 'url 02'
},
{
    title: 'Movie 08 ',
    description: 'Movie description 03',
    rating: 4,
    posterurl: 'url 03'
},
{
    title: 'Movie 09 ',
    description: 'Movie description 04',
    rating: 9,
    posterurl: 'url 04'
},
{
  title: 'Movie 10 ',
  description: 'Movie description 04',
  rating: 9,
  posterurl: 'url 04'
},
{
  title: 'Movie 11 ',
  description: 'Movie description 01',
  rating: 9,
  posterurl: 'url 11'
},
{
  title: 'Movie 12 ',
  description: 'Movie description 02',
  rating: 6,
  posterurl: 'url 02'
},
{
  title: 'Movie 13 ',
  description: 'Movie description 03',
  rating: 4,
  posterurl: 'url 03'
},
{
  title: 'Movie 14 ',
  description: 'Movie description 04',
  rating: 9,
  posterurl: 'url 04'
},
{
title: 'Movie 15 ',
description: 'Movie description 04',
rating: 9,
posterurl: 'url 04'
},
{
  title: 'Movie 16 ',
  description: 'Movie description 01',
  rating: 9,
  posterurl: 'url 01'
},
{
  title: 'Movie 17 ',
  description: 'Movie description 02',
  rating: 6,
  posterurl: 'url 02'
},
{
  title: 'Movie 18 ',
  description: 'Movie description 03',
  rating: 4,
  posterurl: 'url 03'
},
{
  title: 'Movie 19 ',
  description: 'Movie description 04',
  rating: 9,
  posterurl: 'url 04'
},
{
title: 'Movie 20 ',
description: 'Movie description 04',
rating: 9,
posterurl: 'url 04'
},
  
]

const Movie = ()=> {
  const [movies, setMovies] = useState(moviesList)
  return (
    <>
        
      
        <Filter movies={movies} setMovies={setMovies}  
        moviesList={moviesList}/>
        <MovieList moviesprops={movies}/>

    
     </>
  );
}
export default Movie;
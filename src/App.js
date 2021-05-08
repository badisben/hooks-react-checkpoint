import './App.css';
import Filter from './component/filter/filter';
import MovieList from './component/movieliste/liste';
import {useState} from "react";

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
      title: 'Movie 04 ',
      description: 'Movie description 04',
      rating: 9,
      posterurl: 'url 04'
  },
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
  title: 'Movie 04 ',
  description: 'Movie description 04',
  rating: 9,
  posterurl: 'url 04'
},
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
title: 'Movie 04 ',
description: 'Movie description 04',
rating: 9,
posterurl: 'url 04'
},
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
title: 'Movie 04 ',
description: 'Movie description 04',
rating: 9,
posterurl: 'url 04'
},
  
]

const App = ()=> {
  const [movies, setMovies] = useState(moviesList)
  return (
    <>
        <Filter/>
        <MovieList moviesprops={movies}/>
    
     </>
  );
}

export default App;
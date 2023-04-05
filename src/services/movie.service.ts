import axios from 'axios';
import {convertToMovie,convertToMovieDetails} from '../converters/movie.converter';

let moviesCache: Record <number, Movie[]> ={};
let totalPagesCache: number | undefined;

interface MovieDetailsCache {
[key: number]: MovieDetails;
}

const getMovies = async (page:number): Promise <Movies> => { 
  console.log('pries',moviesCache,page)
  if (!moviesCache[page]){
    const {data} = await axios.get<TmdbMovies>(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&vote_count.gte=1000&api_key=${process.env.API_KEY}`)
       moviesCache[page] = data.results.map(convertToMovie);
       totalPagesCache = data.total_pages
  }
  return {
    page: page,
    movies: moviesCache[page] || [],
    totalPages: totalPagesCache || 1,
  }; 
};      

const movieDetailsCache: MovieDetailsCache = {};

const getMovie = async (movieId: number): Promise <MovieDetails> => { 
  if (!movieDetailsCache[movieId]){
    movieDetailsCache[movieId]
  const {data} = await axios.get<TmdbMovieDetails>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
   movieDetailsCache[movieId] = convertToMovieDetails(data);

};
return movieDetailsCache[movieId];
}

export { getMovies, getMovie };

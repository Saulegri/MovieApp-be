import express from 'express';
import * as movieService from '../services/movie.service'; 


const getMovies = async (req: express.Request, res: express.Response,next: express.NextFunction):Promise<void> => {
  try {
    let page = req.query.page as (string | undefined);
  if (typeof page === 'undefined'){
    page = '1'
  }
    res.json(await movieService.getMovies(parseInt(page)));
  } catch (error) {
    next(error);
  }
};

const getMovie = async (req: express.Request, res: express.Response,next: express.NextFunction):Promise<void> => {

  try {
    res.json(await movieService.getMovie(parseInt(req.params.movieId)));
  } catch (error) {
    next(error);
  }
};

export { getMovies, getMovie };

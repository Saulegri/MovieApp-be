const imagePathPrefix = 'https://image.tmdb.org/t/p/w500'

const convertToMovie = (tmdbMovie: TmdbMovie): Movie => {
    return {
      movieId: tmdbMovie.id,
      title: tmdbMovie.title,
      releaseDate: tmdbMovie.release_date,
      backdropPath: imagePathPrefix + tmdbMovie.backdrop_path,
      posterPath: imagePathPrefix + tmdbMovie.poster_path,
      voteAverage: tmdbMovie.vote_average
    };
  };

  const convertToProductionCompany = (tmdbProductionCompany: TmdbProductionCompany): ProductionCompany =>{
    return {
  id:tmdbProductionCompany.id,
  logoPath: tmdbProductionCompany.logo_path,
  name: tmdbProductionCompany.name,
  originCountry: tmdbProductionCompany.origin_country,
    };
  };

  const convertToProductionCountry = (tmdbProductionCountry: TmdbProductionCountry): ProductionCountry =>{
    return {
      iso: tmdbProductionCountry.iso_3166_1,
  name: tmdbProductionCountry.name,
    };
  };

  const convertToSpokenLanguage = (tmdbSpokenLanguage : TmdbSpokenLanguage ): SpokenLanguage  =>{
    return {
      englishName: tmdbSpokenLanguage.english_name,
      iso: tmdbSpokenLanguage.iso_639_1,
      name: tmdbSpokenLanguage.name,
    };
  };

const convertToMovieDetails = (tmdbMovieDetails: TmdbMovieDetails): MovieDetails => {
  return { 
    ...convertToMovie(tmdbMovieDetails),
    budget: tmdbMovieDetails.budget,
    genres: tmdbMovieDetails.genres,
    homepage: tmdbMovieDetails.homepage,
    backdropPath:'https://image.tmdb.org/t/p/original' + tmdbMovieDetails.backdrop_path,
    posterPath: 'https://image.tmdb.org/t/p/original' + tmdbMovieDetails.poster_path,
    originalLanguage: tmdbMovieDetails.original_language,
    originalTitle: tmdbMovieDetails.original_title,
    overview: tmdbMovieDetails.overview,
    productionCompanies: tmdbMovieDetails.production_companies.map(convertToProductionCompany),
    productionCountries: tmdbMovieDetails.production_countries.map(convertToProductionCountry),
    revenue: tmdbMovieDetails.revenue,
    runtime: tmdbMovieDetails.runtime,
    spokenLanguages: tmdbMovieDetails.spoken_languages.map(convertToSpokenLanguage),
    status: tmdbMovieDetails.status,
    tagline: tmdbMovieDetails.tagline,
    title: tmdbMovieDetails.title,
    voteCount: tmdbMovieDetails.vote_count,
  };
};
  export { convertToMovie, convertToMovieDetails };

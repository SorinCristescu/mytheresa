import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMoviesLatest,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
} from '../../redux/movies/actions';

// Components
import Carousel from '../../components/Carousel';

// Styles
import { PageContainer } from './style';
const HomePage = (props) => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const loadingMovies = useSelector((state) => state.movies.loading);
  const movie = useSelector((state) => state.movies.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getMoviesLatest());
      await dispatch(getMoviesNowPlaying());
      await dispatch(getMoviesPopular());
      await dispatch(getMoviesTopRated());
      await dispatch(getMoviesUpcoming());
    }
    fetchMovies();
  }, []);

  return (
    <PageContainer>
      <Carousel
        name="Now Playing"
        movies={!loadingMovies && nowPlayingMovies}
        categoryName="nowPlayingMovies"
      />
      <Carousel
        name="Most Popular"
        movies={!loadingMovies && popularMovies}
        categoryName="popularMovies"
      />
      <Carousel
        name="Top Rated"
        movies={!loadingMovies && topRatedMovies}
        categoryName="topRatedMovies"
      />
      <Carousel
        name="Upcoming"
        movies={!loadingMovies && upcomingMovies}
        categoryName="upcomingMovies"
      />
    </PageContainer>
  );
};

export default HomePage;

import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchByQuerry, setPage } from '../../redux/movies/actions';
import gsap from 'gsap';

// Routing
import { withRouter } from 'react-router-dom';

// Components
import MovieCard from '../../components/MovieCard';
import SearchInput from '../../components/SearchInput';

// Styles
import { PageContainer, MoviesList, SearchContainer } from './style';

const CategoryPage = (props) => {
  const title = useRef();
  const list = useRef();
  const search = useRef();
  const categoryNameParam = props.match.params.categoryName;

  const movies = useSelector((state) => state.movies);
  console.log('movies from category', movies);
  const loadingMovies = useSelector((state) => state.movies.loading);

  useEffect(() => {
    if (!loadingMovies) {
      gsap.from([title.current], 1, {
        delay: 0.7,
        opacity: 0,
        y: 50,
        ease: 'back.easeOut',
      });

      gsap.from([list.current], 1, {
        delay: 0,
        opacity: 0,
        y: 50,
        ease: 'back.easeOut',
      });
      gsap.from([search.current], 1, {
        delay: 1.3,
        opacity: 0,
        y: 50,
        ease: 'back.easeOut',
      });
    }
  }, [title, list, search]);

  let moviesArray = Object.keys(movies)
    .filter((moviesList) => moviesList === categoryNameParam)
    .map((moviesList) => movies[moviesList]);

  const searchMovies = useSelector((state) => state.movies.searchMovies);
  const dispatch = useDispatch();
  const [querry, setQuerry] = useState('');

  const onChangeHandler = async (e) => {
    setQuerry(e.target.value);
    dispatch(searchByQuerry(e.target.value));
  };

  const setCategoryName = () => {
    let name = '';
    if (categoryNameParam === 'popularMovies') {
      name = 'Most Popular';
    } else if (categoryNameParam === 'topRatedMovies') {
      name = 'Top rated';
    } else if (categoryNameParam === 'upcomingMovies') {
      name = 'Upcoming';
    } else if (categoryNameParam === 'latestMovies') {
      name = 'Latest';
    } else if (categoryNameParam === 'nowPlayingMovies') {
      name = 'Now Playing';
    } else {
      return;
    }
    return name;
  };
  const renderMovies = () => {
    console.log(moviesArray[0]);
    if (searchMovies && querry !== '') {
      return (
        <>
          <h2 ref={title}>Your search results:</h2>
          <MoviesList ref={list}>
            {searchMovies.results &&
              searchMovies.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </MoviesList>
        </>
      );
    } else if (querry === '' && moviesArray) {
      return (
        <>
          <h2 ref={title}>{setCategoryName()}</h2>
          <MoviesList ref={list}>
            {moviesArray[0].results &&
              moviesArray[0].results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </MoviesList>
        </>
      );
    } else {
      return <h1>There's no movies</h1>;
    }
  };

  return (
    <PageContainer>
      <SearchContainer ref={search}>
        <SearchInput
          onChange={(e) => onChangeHandler(e)}
          type="text"
          placeholder="Type something to search..."
          value={querry}
        />
      </SearchContainer>

      {renderMovies()}
    </PageContainer>
  );
};

export default withRouter(CategoryPage);

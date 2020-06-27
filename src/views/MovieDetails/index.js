import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieById } from '../../redux/movies/actions';
import { addMovieToCart } from '../../redux/cart/actions';

// Routing
import { withRouter, NavLink } from 'react-router-dom';
import { BASE_URL_IMAGE } from '../../constants';

// Components
import Button from '../../components/Button';

// Styles
import {
  PageContainer,
  ContainerInner,
  ImageWrapper,
  ImageContainer,
  MoreInfo,
  Description,
} from './style';
import Spinner from '../../components/Spinner';

const MovieDetailsPage = (props) => {
  const line = useRef();
  const movieTitle = useRef();
  const movieDescription = useRef();
  const addToCartButton = useRef();
  const moreInfo = useRef();
  const imageEl = useRef();
  const imageWrapper = useRef();

  const movieId = props.match.params.id;
  const movie = useSelector((state) => state.movies.movie);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const loadingMovies = useSelector((state) => state.movies.loading);

  useEffect(() => {
    async function fetchMovies() {
      dispatch(getMovieById(movieId));
    }
    fetchMovies();

    if (!loadingMovies && movie) {
      gsap.from([line.current], 1, {
        delay: 1.5,
        opacity: 0,
        x: 100,
        ease: 'back.easeOut',
      });

      gsap.from([movieTitle.current], 1, {
        delay: 0.4,
        opacity: 0,
        x: '100%',
        ease: 'back.easeOut',
      });

      gsap.from([movieDescription.current], 0.5, {
        delay: 1.3,
        opacity: 0,
        y: 50,
        ease: 'back.easeOut',
      });

      gsap.from([addToCartButton.current], 1, {
        delay: 1.5,
        opacity: 0,
        x: 100,
        ease: 'back.easeOut',
      });

      gsap.from([moreInfo.current], 1, {
        delay: 2,
        opacity: 0,
        y: 50,
        ease: 'back.easeOut',
      });
      gsap.from([imageWrapper.current], 1, {
        delay: 0,
        opacity: 0,
        x: '100%',
        ease: 'back.easeOut',
      });
      gsap.from([imageEl.current], 1, {
        delay: 0,
        scale: 1.8,
        ease: 'back.easeOut',
      });
    }
  }, [
    imageEl,
    imageWrapper,
    moreInfo,
    addToCartButton,
    movieDescription,
    movieTitle,
    line,
  ]);

  const addToCart = (product) => {
    let productToBeAdded = {
      id: product.id,
      title: product.title,
      poster_path: product.poster_path,
      units: 1,
      price: 35,
      inCart: true,
    };
    dispatch(addMovieToCart(productToBeAdded));
  };

  if (!movie) {
    return <Spinner />;
  } else {
    const {
      title,
      runtime,
      vote_average,
      vote_count,
      release_date,
      poster_path,
    } = movie;
    return (
      <>
        <ContainerInner>
          <div className="main-content">
            <div className="main-headings">
              <p ref={line} className="by-line">
                Release Date: {release_date}
              </p>
              <div ref={movieTitle} className="heading">
                <h1 className="heading1">{title}</h1>
              </div>
              <Description>
                <p ref={movieDescription}>{movie && movie.overview}</p>
              </Description>
              <div ref={addToCartButton}>
                <Button
                  id="add_movie_details"
                  onClick={() => addToCart(movie)}
                  name="ADD TO CART"
                  width="200px"
                />
              </div>
            </div>
            <MoreInfo ref={moreInfo}>
              <p>Duration: {runtime}</p>
              <p>Rating: {vote_average}</p>
              <p>Vote count: {vote_count}</p>
            </MoreInfo>
          </div>
          <ImageWrapper ref={imageWrapper}>
            <ImageContainer>
              <img
                ref={imageEl}
                className="image"
                src={`${BASE_URL_IMAGE}${poster_path}`}
                alt="image of a young woman."
              />
            </ImageContainer>
          </ImageWrapper>
        </ContainerInner>
      </>
    );
  }
};

export default withRouter(MovieDetailsPage);

import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useSelector } from 'react-redux';

import Slider from 'react-slick';
import MovieCard from '../MovieCard';
import { CarouselContainer, CarouselBody, CarouselTitle } from './style';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const Carousel = (props) => {
  const carousel = useRef();
  const carousel_title = useRef();
  const loadingMovies = useSelector((state) => state.movies.loading);
  const { name, categoryName, movies } = props;
  const settings = {
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    centerMode: 'true',
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: 'linear',
    pauseOnHover: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (!loadingMovies) {
      gsap.from([carousel.current], 1, {
        delay: 0,
        opacity: 0,
        y: 50,
        ease: 'back.easeInOut',
      });

      gsap.from([carousel_title.current], 1, {
        delay: 1.5,
        opacity: 0,
        y: 50,
        ease: 'back.easeInOut',
      });
    }
  }, [carousel, carousel_title]);
  return (
    <CarouselContainer ref={carousel}>
      <NavLink to={`/category/${categoryName}`}>
        <CarouselTitle ref={carousel_title}>{name}</CarouselTitle>
      </NavLink>

      <CarouselBody>
        <svg
          width="978px"
          height="29px"
          viewBox="0 0 978 29"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Desktop-HD" transform="translate(-194.000000, -622.000000)">
              <g id="movi-film" transform="translate(194.000000, 622.000000)">
                <rect
                  id="Rectangle"
                  stroke="#63616A"
                  fill="#63616A"
                  x="19.5"
                  y="0.5"
                  width="939"
                  height="28"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#0A0218"
                  x="34"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-28"
                  fill="#0A0218"
                  x="0"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-4"
                  fill="#0A0218"
                  x="170"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-8"
                  fill="#0A0218"
                  x="306"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-12"
                  fill="#0A0218"
                  x="442"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-16"
                  fill="#0A0218"
                  x="578"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-20"
                  fill="#0A0218"
                  x="714"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-24"
                  fill="#0A0218"
                  x="850"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy"
                  fill="#0A0218"
                  x="68"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-5"
                  fill="#0A0218"
                  x="204"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-9"
                  fill="#0A0218"
                  x="340"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-13"
                  fill="#0A0218"
                  x="476"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-17"
                  fill="#0A0218"
                  x="612"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-21"
                  fill="#0A0218"
                  x="748"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-25"
                  fill="#0A0218"
                  x="884"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-2"
                  fill="#0A0218"
                  x="102"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-6"
                  fill="#0A0218"
                  x="238"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-10"
                  fill="#0A0218"
                  x="374"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-14"
                  fill="#0A0218"
                  x="510"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-18"
                  fill="#0A0218"
                  x="646"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-22"
                  fill="#0A0218"
                  x="782"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-26"
                  fill="#0A0218"
                  x="918"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-3"
                  fill="#0A0218"
                  x="136"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-7"
                  fill="#0A0218"
                  x="272"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-11"
                  fill="#0A0218"
                  x="408"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-15"
                  fill="#0A0218"
                  x="544"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-19"
                  fill="#0A0218"
                  x="680"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-23"
                  fill="#0A0218"
                  x="816"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-27"
                  fill="#0A0218"
                  x="952"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
              </g>
            </g>
          </g>
        </svg>
        <Slider {...settings}>
          {movies.results &&
            movies.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </Slider>
        <svg
          width="978px"
          height="29px"
          viewBox="0 0 978 29"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Desktop-HD" transform="translate(-194.000000, -622.000000)">
              <g id="movi-film" transform="translate(194.000000, 622.000000)">
                <rect
                  id="Rectangle"
                  stroke="#63616A"
                  fill="#63616A"
                  x="19.5"
                  y="0.5"
                  width="939"
                  height="28"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#0A0218"
                  x="34"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-28"
                  fill="#0A0218"
                  x="0"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-4"
                  fill="#0A0218"
                  x="170"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-8"
                  fill="#0A0218"
                  x="306"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-12"
                  fill="#0A0218"
                  x="442"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-16"
                  fill="#0A0218"
                  x="578"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-20"
                  fill="#0A0218"
                  x="714"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-24"
                  fill="#0A0218"
                  x="850"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy"
                  fill="#0A0218"
                  x="68"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-5"
                  fill="#0A0218"
                  x="204"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-9"
                  fill="#0A0218"
                  x="340"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-13"
                  fill="#0A0218"
                  x="476"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-17"
                  fill="#0A0218"
                  x="612"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-21"
                  fill="#0A0218"
                  x="748"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-25"
                  fill="#0A0218"
                  x="884"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-2"
                  fill="#0A0218"
                  x="102"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-6"
                  fill="#0A0218"
                  x="238"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-10"
                  fill="#0A0218"
                  x="374"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-14"
                  fill="#0A0218"
                  x="510"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-18"
                  fill="#0A0218"
                  x="646"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-22"
                  fill="#0A0218"
                  x="782"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-26"
                  fill="#0A0218"
                  x="918"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-3"
                  fill="#0A0218"
                  x="136"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-7"
                  fill="#0A0218"
                  x="272"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-11"
                  fill="#0A0218"
                  x="408"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-15"
                  fill="#0A0218"
                  x="544"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-19"
                  fill="#0A0218"
                  x="680"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-23"
                  fill="#0A0218"
                  x="816"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
                <rect
                  id="Rectangle-Copy-27"
                  fill="#0A0218"
                  x="952"
                  y="7"
                  width="26"
                  height="15"
                ></rect>
              </g>
            </g>
          </g>
        </svg>
      </CarouselBody>
    </CarouselContainer>
  );
};

// Runtime props type checking
Carousel.propTypes = {
  name: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default Carousel;

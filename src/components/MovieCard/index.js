import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardContainer, Overlay } from './style';

const MovieCard = ({ movie }) => {
  const { id, title, vote_average, poster_path } = movie;

  return (
    <NavLink to={`/movie-details/${id}`}>
      <CardContainer imageUrl={poster_path}>
        <Overlay>
          <div className="items" />
          <div className="items head">
            <p>{title}</p>
            <hr />
          </div>
          <div className="items price">
            <p className="old">$699</p>
            <p className="new">{vote_average}</p>
          </div>
          <div className="items cart">
            <i className="fa fa-shopping-cart" />
            <span>ADD TO CART</span>
          </div>
        </Overlay>
      </CardContainer>
    </NavLink>
  );
};

// Runtime props type checking
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;

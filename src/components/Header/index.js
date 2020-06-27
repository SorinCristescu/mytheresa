import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
// Components

// Styles
import { HeaderContainer, Navbar } from './style';

const Header = () => {
  const header = useRef();
  const nrOfProducts = useSelector((state) => state.cart.numberOfProducts);
  const loadingMovies = useSelector((state) => state.movies.loading);

  useEffect(() => {
    if (!loadingMovies) {
      gsap.from([header.current], 1, {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: 'back.easeOut',
      });
    }
  }, []);
  return (
    <HeaderContainer ref={header}>
      <Navbar>
        <div className="logo-container">
          <NavLink to="/">
            <svg
              width="63px"
              height="64px"
              viewBox="0 0 63 64"
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
                <g
                  id="Desktop-HD"
                  transform="translate(-133.000000, -10.000000)"
                  stroke="#F9F8FE"
                >
                  <g id="logo" transform="translate(133.000000, 12.000000)">
                    <g id="role" transform="translate(0.000000, 14.520000)">
                      <circle
                        id="Oval"
                        strokeWidth="3.36"
                        cx="23.4"
                        cy="23.4"
                        r="21.72"
                      ></circle>
                      <circle
                        id="Oval"
                        strokeWidth="3.24"
                        cx="23.52"
                        cy="12.6"
                        r="3.66"
                      ></circle>
                      <circle
                        id="Oval-Copy"
                        strokeWidth="3.24"
                        cx="34.32"
                        cy="23.4"
                        r="3.66"
                      ></circle>
                      <circle
                        id="Oval-Copy-2"
                        strokeWidth="3.24"
                        cx="23.52"
                        cy="34.2"
                        r="3.66"
                      ></circle>
                      <circle
                        id="Oval-Copy-3"
                        strokeWidth="3.24"
                        cx="12.72"
                        cy="23.4"
                        r="3.66"
                      ></circle>
                      <rect
                        id="Rectangle"
                        strokeWidth="0.5"
                        fill="#F9F8FE"
                        x="21.97"
                        y="21.85"
                        width="3.1"
                        height="3.1"
                      ></rect>
                    </g>
                    <g
                      id="Group"
                      transform="translate(16.920000, 0.000000)"
                      strokeWidth="3.36"
                    >
                      <path
                        d="M28.3059448,40.3721412 C32.2000952,39.3701016 34.7235352,38.5057913 35.8762647,37.7792105 C37.6053589,36.6893392 42.8154592,33.1607606 43.2995277,23.5984286 C43.7835961,14.0360966 33.6997565,8.15215684 29.1984636,8.15215684 C20.4794236,8.15215684 10.7466024,8.15215684 0,8.15215684 L0,0.483859662 L23.1999036,0.483859662 C28.6599591,0.420816639 33.2392791,2.46596788 36.9378636,6.61931338 C42.4857404,12.8493316 43.2995277,16.9248915 43.7835961,23.5984286 C44.2676646,30.2719657 40.2748798,39.6132468 35.8762647,42.9798865 C32.9438546,45.224313 29.8592127,46.5376841 26.6223391,46.92 L28.3059448,40.3721412 Z"
                        id="Path-2"
                      ></path>
                      <line
                        x1="21.4707835"
                        y1="0"
                        x2="21.4707835"
                        y2="7.7661888"
                        id="Path-3"
                      ></line>
                      <line
                        x1="10.6247221"
                        y1="0"
                        x2="10.6247221"
                        y2="7.7661888"
                        id="Path-4"
                      ></line>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h4>THE MOVIE SHOP</h4>
          </NavLink>
        </div>

        <NavLink to="/cart">
          <div className="cart">
            <span>{nrOfProducts}</span>
            <svg
              className="cart-svg"
              width="62px"
              height="54px"
              viewBox="0 0 62 54"
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
                <g
                  id="Desktop-HD"
                  transform="translate(-1230.000000, -20.000000)"
                  fill="#F9F8FE"
                  fillRule="nonzero"
                >
                  <g id="cart" transform="translate(1230.000000, 20.000000)">
                    <path
                      d="M19.7953126,36.0004687 L19.798125,36.0004687 C19.8004687,36.0004687 19.8028126,36 19.8051563,36 L52.44,36 C53.2434374,36 53.9498437,35.4670313 54.170625,34.6945313 L61.370625,9.49453128 C61.5257813,8.95125 61.4170313,8.36718744 61.0771874,7.91625 C60.736875,7.46531256 60.2048437,7.2 59.64,7.2 L15.6440626,7.2 L14.3573437,1.40953128 C14.1740626,0.58593744 13.44375,-3.41060513e-15 12.6,-3.41060513e-15 L1.8,-3.41060513e-15 C0.80578128,-3.41060513e-15 0,0.80578128 0,1.8 C0,2.79421872 0.80578128,3.6 1.8,3.6 L11.15625,3.6 C11.3840626,4.62609372 17.31375,31.3101563 17.655,32.8453126 C15.7420313,33.676875 14.4,35.5842187 14.4,37.8 C14.4,40.7775 16.8225,43.2 19.8,43.2 L52.44,43.2 C53.4342187,43.2 54.24,42.3942187 54.24,41.4 C54.24,40.4057813 53.4342187,39.6 52.44,39.6 L19.8,39.6 C18.8076563,39.6 18,38.7923437 18,37.8 C18,36.8090626 18.8048437,36.0028126 19.7953126,36.0004687 L19.7953126,36.0004687 Z M57.2535937,10.8 L51.0820313,32.4 L21.24375,32.4 L16.44375,10.8 L57.2535937,10.8 Z"
                      id="Shape"
                    ></path>
                    <path
                      d="M18,48.6 C18,51.5775 20.4225,54 23.4,54 C26.3775,54 28.8,51.5775 28.8,48.6 C28.8,45.6225 26.3775,43.2 23.4,43.2 C20.4225,43.2 18,45.6225 18,48.6 Z M23.4,46.8 C24.3923437,46.8 25.2,47.6076563 25.2,48.6 C25.2,49.5923437 24.3923437,50.4 23.4,50.4 C22.4076563,50.4 21.6,49.5923437 21.6,48.6 C21.6,47.6076563 22.4076563,46.8 23.4,46.8 Z"
                      id="Shape"
                    ></path>
                    <path
                      d="M43.44,48.6 C43.44,51.5775 45.8625,54 48.84,54 C51.8175,54 54.24,51.5775 54.24,48.6 C54.24,45.6225 51.8175,43.2 48.84,43.2 C45.8625,43.2 43.44,45.6225 43.44,48.6 Z M48.84,46.8 C49.8323437,46.8 50.64,47.6076563 50.64,48.6 C50.64,49.5923437 49.8323437,50.4 48.84,50.4 C47.8476563,50.4 47.04,49.5923437 47.04,48.6 C47.04,47.6076563 47.8476563,46.8 48.84,46.8 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </NavLink>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;

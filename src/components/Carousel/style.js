import styled from 'styled-components';
import { tablet, mobile, laptop } from '../../globalStyles/mediaQueries';

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 100px auto;

  a {
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }

  a:hover h3 {
    color: white;
  }
`;

export const CarouselTitle = styled.h3`
  text-align: center;
  line-height: 100%;
  color: grey;
  ${mobile} {
    font-size: 1rem;
  }
`;

export const CarouselBody = styled.div`
  width: 78%;
  height: 320px;
  margin: 20px auto;
  ${laptop} {
    width: 80%;
  }
  ${tablet} {
    width: 80%;
  }
  ${mobile} {
    width: 60%;
  }
`;

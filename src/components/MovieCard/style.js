import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  height: 300px;
  margin: 20px;
  background: url(${process.env.BASE_URL_IMAGE}${(props) => props.imageUrl});
  background-color: black;
  background-size: cover;
  cursor: pointer;
  -webkit-box-shadow: 0 0 5px #000;
  box-shadow: 0 0 5px #000;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }

  .items {
    padding-left: 20px;
    letter-spacing: 3px;
  }

  .head {
    font-size: 30px;
    line-height: 40px;
    transform: translateY(40px);
    transition: all 0.7s;
  }

  .head hr {
    display: block;
    width: 0;
    border: none;
    border-bottom: solid 2px #fef5df;
    position: absolute;
    bottom: 0;
    left: 20px;
    transition: all 0.5s;
  }

  .price {
    font-size: 22px;
    line-height: 10px;
    font-weight: bold;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s;
  }
  .price .old {
    text-decoration: line-through;
    color: #b3b3b3;
  }
  .cart {
    font-size: 12px;
    opacity: 0;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    transform: translateY(40px);
    transition: all 0.7s;
  }
  .cart i {
    font-size: 16px;
  }
  .cart span {
    margin-left: 10px;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
    .cart {
      transform: translateY(0px);
      transition-delay: 0.6s;
      opacity: 1;
    }
    .price {
      transform: translateY(0px);
      transition-delay: 0.3s;
      opacity: 1;
    }
    hr {
      width: 75px;
      transition-delay: 0.4s;
    }
    .head {
      transform: translateY(0px);
    }
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  background: rgba(77, 77, 77, 0.9);
  color: #fef5df;
  opacity: 0;
  transition: all 0.5s;
  font-family: 'Playfair Display', serif;
`;

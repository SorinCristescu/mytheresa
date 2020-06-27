import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
`;

export const CartList = styled.div`
  width: 60%;
  height: auto;
  overflow-y: scroll;

  h3 {
    text-align: center;
  }
`;

export const Product = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .product-container {
    width: 400px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    width: 90px;
    height: auto;
    margin-right: 50px;
  }
  svg {
    margin: 0 20px;
  }
  svg:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Quantity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 30px;
    height: 30px;
    background: transparent;
    /* border: 2px solid white; */
    border-radius: 50%;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background: white;
    border: 2px solid white;
    color: black;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:active {
    outline: none;
  }

  h5 {
    line-height: 0.1;
  }
`;

export const Commands = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

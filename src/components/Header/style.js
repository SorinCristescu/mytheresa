import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10000;
  padding-top: 10px;
`;

export const Navbar = styled.nav`
  width: 100%;
  max-width: 1244px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
    width: 50px;
    height: 50px;
    position: relative;
  }

  /* h3 {
    position: absolute;
    top: 0;
    left: 0;
  } */

  a:hover {
    transform: scale(1.1);
  }

  .logo-container {
    width: 320px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .cart {
    position: relative;
  }
  span {
    position: absolute;
    top: 11px;
    right: 10px;
    font-family: 'Manrope-ExtraBold';
  }
`;

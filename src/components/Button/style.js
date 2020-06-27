import styled from 'styled-components';

export const ButonContainer = styled.div`
  width: 300px;
  padding: 30px auto;
  margin: 20px 0;

  button {
    text-align: center;
    font-family: 'MonumentExtended-Ultrabold';
    font-size: 18px;
    color: white;
    border: none;
    background: transparent;
  }

  button:hover {
    color: white;
    cursor: pointer;
    border-bottom: 2px solid white;
  }

  button:focus {
    outline: none;
  }
`;

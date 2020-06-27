import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: grey;
    text-align: center;
    font-size: 12px;
  }
`;

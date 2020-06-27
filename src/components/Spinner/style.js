import styled, { keyframes } from 'styled-components';

const spinnerSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${spinnerSpin} infinite 3s linear;
  }
`;

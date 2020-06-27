import styled from 'styled-components';

export const InputContainer = styled.header`
  width: 250px;
  height: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: table-row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 20px;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    color: white;
    padding-left: 15px;
  }
  input:focus {
    outline: none;
  }

  svg {
    margin-right: 10px;
  }
`;

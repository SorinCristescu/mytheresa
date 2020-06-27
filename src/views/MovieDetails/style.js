import styled from 'styled-components';

export const ContainerInner = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;

  .main-content {
    flex-basis: 50%;
    order: 1;
    align-self: center;
    display: flex;
    flex-direction: column;
  }

  .main-headings {
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
  }

  .by-line {
    width: 60%;
    padding-bottom: 1px;
    padding-left: 3px;
    margin-left: 15px;
    font-size: 85%;
    border-bottom: 1px solid grey;
  }

  .heading {
    margin-left: 80px;
  }

  .heading1,
  .heading2 {
    font-size: 300%;
    font-weight: normal;
    letter-spacing: 2px;
  }

  .heading1 {
    margin-left: 50px;
  }
`;

export const ImageWrapper = styled.div`
  flex-basis: 50%;
  order: 2;
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 100%;
  }
`;

export const Description = styled.div`
  width: 60%;
  margin-top: -30px;
  margin-left: 90px;
`;

export const MoreInfo = styled.div`
  width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  align-self: flex-start;
  overflow: hidden;
`;

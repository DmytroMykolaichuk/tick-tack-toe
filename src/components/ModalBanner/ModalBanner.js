import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(73, 65, 65, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #cebb56;
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 200px;
  @media (min-width: 450px) {
    width: 400px;
    height: 350px;
  }
  @media (min-width: 550px) {
    width: 500px;
    height: 425px;
  }
  @media (min-width: 1070px) {
    width: 600px;
  }
`;

export const TitleModal = styled.h1`
  background-color: bisque;
  color: black;
  font-size: 30px;
  @media (min-width: 450px) {
    font-size: 60px;
  }
`;

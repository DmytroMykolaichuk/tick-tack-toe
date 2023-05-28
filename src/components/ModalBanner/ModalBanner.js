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
  align-items: center;
  background-color: #cebb56;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitleModal = styled.h1`
  font-size: 60px;
  background-color: bisque;
  color: black;
`;

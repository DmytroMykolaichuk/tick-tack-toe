import styled from 'styled-components';
import background from '../image/background.webp';

export const ContainerButtonField = styled.div`
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 556px;
  background-color: black;
`;

export const ContainerButtonGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContainerGame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(
      circle at center,
      rgb(0, 0, 0) 10%,
      rgba(255, 255, 255, 0)
    ),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

import styled from 'styled-components';

export const ButtonGame = styled.button`
  border-radius: 30%;
  padding: 0;
  width: 100px;
  height: 90px;
  border: none;
  flex-basis: calc((100% - 16px) / 3);
  font-size: 80px;
  font-weight: 700;
  background-color: beige;

  @media (min-width: 420px) {
    width: 130px;
    height: 130px;
    font-size: 100px;
  }
  @media (min-width: 520px) {
    width: 160px;
    height: 160px;
    font-size: 140px;
  }
  @media (min-width: 1070px) {
    width: 200px;
    height: 180px;
    font-size: 160px;
  }
`;

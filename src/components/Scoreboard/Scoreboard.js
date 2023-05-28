import styled from 'styled-components';

export const Title = styled.p`
  padding: 5px 10px;
  margin: 0;
  color: black;
  background-color: antiquewhite;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  border-top-left-radius: 30px;
`;

export const ScoreboardList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0 10px;
  list-style: none;
  color: black;
  background-color: antiquewhite;
  text-align: center;
  font-size: 20px;
  margin: 0;

  @media (min-width: 1070px) {
    gap: 20px;
    font-size: 30px;
    padding: 0 20px;
  }
`;

export const Result = styled.p`
  margin: 0;
  padding: 0 10px;
  background-color: azure;
`;

export const Number = styled.span`
  color: red;
  font-weight: 700;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Restart = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: azure;
  cursor: pointer;
  border-right: none;
  border-bottom-left-radius: 50%;
`;

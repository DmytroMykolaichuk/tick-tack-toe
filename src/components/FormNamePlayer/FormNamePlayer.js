import styled from 'styled-components';

export const FormName = styled.form`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 25px;
  font-weight: 700;
  color: black;
  text-align: center;
  width: 200px;
  @media (min-width: 1250px) {
    width: 300px;
  }
`;

export const SubmitBtnName = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 32px;
  cursor: pointer;
  border: 1px black solid;
  border-left: none;
  background-color: azure;
`;

export const InputName = styled.input`
  height: 30px;
  padding: 0;
  padding-left: 10px;
  border: 1px black solid;
  border-right: none;
  background-color: azure;
`;

export const NamePlayer = styled.span`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: antiquewhite;
  max-width: 100%;
`;

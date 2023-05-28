import styled from 'styled-components';

export const FormName = styled.form`
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
`;

export const SubmitBtnName = styled.button`
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
  padding-left: 5px;
  border: 1px black solid;
  border-right: none;
  background-color: azure;
`;

export const NamePlayer = styled.span`
  background-color: antiquewhite;
  max-width: 100%;
`;

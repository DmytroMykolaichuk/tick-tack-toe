import {
  FormName,
  LabelName,
  NamePlayer,
  InputName,
  SubmitBtnName,
} from './FormNamePlayer.js';
import { FcPlus } from 'react-icons/fc';
import { useState } from 'react';

export function FormNamePlayer({ defaultName, getNamePlayer }) {
  const [name, setName] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.name;
    if (value.trim()) {
      setName(value);
    }
    getNamePlayer(defaultName, value);
    e.target.name.value = '';
  }

  return (
    <div>
      <FormName onSubmit={handleSubmit}>
        <LabelName>
          <NamePlayer>{name || defaultName}</NamePlayer>
          <InputName name="name" type="text" placeholder="Enter your name" />
        </LabelName>
        <SubmitBtnName type="submit">
          <FcPlus size={'24px'} />
        </SubmitBtnName>
      </FormName>
    </div>
  );
}

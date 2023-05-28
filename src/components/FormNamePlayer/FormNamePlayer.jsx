import css from './FormNamePlayer.module.css';
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
      <form className={css.formName} onSubmit={handleSubmit}>
        <label className={css.labelName}>
          <span className={css.namePlayer}>{name || defaultName}</span>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className={css.inputName}
          />
        </label>
        <button type="submit" className={css.submitBtnName}>
          <FcPlus size={'24px'} />
        </button>
      </form>
    </div>
  );
}

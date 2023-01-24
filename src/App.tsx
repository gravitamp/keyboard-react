import React, { useState } from 'react';

interface Props {
  onChange: (value: string) => void;
}

const VirtualKeyboard: React.FC<Props> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent;
    if (value === 'Backspace' || value === '<') {
      setInputValue(inputValue.slice(0, -1)); // remove last character
    } else {
      setInputValue(inputValue + value);
    }
    onChange(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} readOnly={true} />
      <br />
      <br />
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <br />
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <br />
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <br />
      <button onClick={handleClick}>0</button>
      <button onClick={handleClick}>.</button>
      <button onClick={handleClick}>Backspace</button>
    </div>
  );
};

export default VirtualKeyboard;

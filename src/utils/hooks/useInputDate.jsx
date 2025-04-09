import { useState } from 'react';

const useDateInput = () => {
  const [inputType, setInputType] = useState('text');
  
  const handleDateClick = () => {
    setInputType('date');
  };

  return { inputType, handleDateClick };
};

export default useDateInput;
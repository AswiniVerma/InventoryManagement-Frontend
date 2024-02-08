// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const history = useNavigate();

  const goBack = () => {
    history(-1);
  };

  return (
    <button onClick={goBack} className="bg-customBlue hover:bg-purple-500 text-white font-bold mt-3 py-2 px-4 rounded-full">
      Back
    </button>
  );
};

export default BackButton;

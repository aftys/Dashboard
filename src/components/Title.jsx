import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Titles = ({  title }) => {
    const { currentMode } = useStateContext();

  return (
    <div className=" my-5 justify-center">
    <p className="text-center dark:text-white-200 text-xl mb-2 mt-3">{title}</p>
  </div>
  );

  };

export default Titles;

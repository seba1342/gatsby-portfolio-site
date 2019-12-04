import React from 'react';
import useDarkMode from 'use-dark-mode';

import './styles.css';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle" onClick={darkMode.toggle}>
      {darkMode.value ? '☀' : '☾'}
    </div>
  );
};

export default DarkModeToggle;

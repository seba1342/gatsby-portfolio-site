import React from 'react';
import useDarkMode from 'use-dark-mode';

import './styles.css';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <span className="dark-mode-toggle" onClick={darkMode.toggle}>
        {/* {darkMode.value ? '🌞' : '🌙'} */}
        {darkMode.value ? '☀' : '☾'}
      </span>
    </div>
  );
};

export default DarkModeToggle;

import React from 'react';
import useDarkMode from 'use-dark-mode';

import './styles.css';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle__container">
      <div className="dark-mode-toggle" onClick={darkMode.toggle}>
        {darkMode.value ? <span role="img" aria-label="sun emoji">☀️</span> : <span role="img" aria-label="moon emoji">🌚</span>}
      </div>
    </div>
  );
};

export default DarkModeToggle;

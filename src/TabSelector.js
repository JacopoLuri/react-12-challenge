import React from 'react';

function TabSelector(props){
  const { tabber, value } = props;
  return (
    <div className="TabSelector">
      <button
        value="home"
        onClick={tabber}
        className={value === 'home' ? 'active' : ''}
      >
        Home
      </button>
      <button
        value="about"
        onClick={tabber}
        className={value === 'about' ? 'active' : ''}
      >
        About
      </button>
      <button
        value="contact"
        onClick={tabber}
        className={value === 'contact' ? 'active' : ''}
      >
        Contact
      </button>
    </div>
  );
}

export default TabSelector;

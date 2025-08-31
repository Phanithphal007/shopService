import React, { useState } from 'react';

function ShowHideComponent() {
  const [isVisible, setIsVisible] = useState(false); // initial state: hidden

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // toggle between true and false
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible && (
        <div style={{ marginTop: '20px', backgroundColor: 'lightblue', padding: '20px' }}>
          Hello! I appear and disappear.
        </div>
      )}
    </div>
  );
}

export default ShowHideComponent;

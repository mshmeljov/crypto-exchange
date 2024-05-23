import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import './styles.css';

const ParentComponent = () => {
  const [showChild, setShowChild] = useState(false);

  const toggleChild = () => {
    setShowChild(!showChild);
  };

  return (
    <div class='container-parent'>
      <h1>BITCOIN</h1>
      <button onClick={toggleChild}>
        {showChild? 'Hide text': 'Show more'} 
      </button>
      {showChild && <ChildComponent />}
    </div>
  );
};

export default ParentComponent;

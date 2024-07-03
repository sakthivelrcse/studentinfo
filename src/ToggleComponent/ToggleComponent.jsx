import React, { useState } from 'react';
import profile from '../assets/122222.jpg';
import './ToggleComponent.css';

const ToggleComponent = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <React.Fragment>
      <div className='box1'>
        <img src={profile} alt="Profile" className='imgbox'/>
        <h2 className='name sign'>Name: Sakthivel R</h2>
        <h3 className='name1 sign'>Registration Number: 212221040141</h3>
        <button className='btn' onClick={handleShowDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <p className='detail'>
            Currently pursing computer science engineering department at saveetha engineering college. I am working on the project called information which contain name registration button and show datails . when i click the button it show the information.
          </p>
        )}
      </div>
    </React.Fragment>
  );
}

export default ToggleComponent;

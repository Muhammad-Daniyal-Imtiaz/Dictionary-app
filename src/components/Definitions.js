import React from 'react';

function Definitions({ definitions }) {
  return (
    <div>
      <h2>Definitions:</h2>
      <ul>
        {definitions.map((definition, index) => (
          <li key={index}>{definition}</li>
        ))}
      </ul>
    </div>
  );
}

export default Definitions;

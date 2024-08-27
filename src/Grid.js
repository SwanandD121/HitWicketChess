// src/components/Grid.js
import React from 'react';
import Character from './Character';

const Grid = ({ grid, onMove }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {cell && <Character character={cell} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;

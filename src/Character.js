// src/components/Character.js
import React from 'react';

const Character = ({ character }) => {
  return (
    <div className={`character ${character.type}`}>
      {character.player}-{character.type}
    </div>
  );
};

export default Character;

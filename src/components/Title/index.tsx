import React from 'react';

type Props = {
  shuffleCards: () => void;
};

export const Title: React.FC<Props> = ({ shuffleCards }) => {
  return (
    <>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </>
  );
};

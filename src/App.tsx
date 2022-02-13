import './styles/App.scss';

import { AppContainer } from 'containers/AppContainer';
import React from 'react';

import { SingleCard } from './components/SingleCard';
import { useGame } from './hooks/useGame';

export type Card = {
  id?: number;
  matched: boolean;
  src: string;
};

function App() {
  const { cards, choiceOne, choiceTwo, disabled, turns, handleChoice, shuffleCards } =
    useGame();
  return (
    <AppContainer shuffleCards={shuffleCards} turns={turns}>
      {cards.map((card: Card) => (
        <SingleCard
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </AppContainer>
  );
}

export default App;

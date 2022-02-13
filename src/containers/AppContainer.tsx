import { Title } from 'components/Title';
import { Turns } from 'components/Turns';
import React from 'react';

type Props = {
  shuffleCards: () => void;
  turns: number;
};

export const AppContainer: React.FC<Props> = ({ shuffleCards, turns, children }) => (
  <div className="App">
    <Title shuffleCards={shuffleCards} />
    <div className="card-grid">{children}</div>
    <Turns turns={turns} />
  </div>
);

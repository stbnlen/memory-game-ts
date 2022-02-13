/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import './SingleCard.scss';

import { Card } from 'App';
import React from 'react';

import back from '../../assets/images/cover.png';

type T = Card;

type Props = {
  card: T;
  handleChoice: (e: T) => void;
  flipped: boolean;
  disabled: boolean;
};

export const SingleCard: React.FC<Props> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} alt="card front" className="front" />
        <img src={back} className="back" alt="card back" onClick={handleClick} />
      </div>
    </div>
  );
};

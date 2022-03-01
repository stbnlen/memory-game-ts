import helmet from '@assets/images/helmet-1.png';
import potion from '@assets/images/potion-1.png';
import ring from '@assets/images/ring-1.png';
import scroll from '@assets/images/scroll-1.png';
import shield from '@assets/images/shield-1.png';
import sword from '@assets/images/sword-1.png';
import { Card } from 'App';
import { useEffect, useState } from 'react';

type T = Card;

const cardImages: T[] = [
  { src: helmet, matched: false },
  { src: potion, matched: false },
  { src: ring, matched: false },
  { src: scroll, matched: false },
  { src: shield, matched: false },
  { src: sword, matched: false },
];

export const useGame = () => {
  const [cards, setCards] = useState<T[] | []>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<T | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<T | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards: T[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          }),
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // start a new game automagically
  useEffect(() => {
    shuffleCards();
  }, []);
  return {
    cards,
    choiceOne,
    choiceTwo,
    disabled,
    turns,
    handleChoice,
    shuffleCards,
  };
};

import React from 'react';

type Props = {
  turns: number;
};

export const Turns: React.FC<Props> = ({ turns }) => {
  return <p>Turns: {turns}</p>;
};

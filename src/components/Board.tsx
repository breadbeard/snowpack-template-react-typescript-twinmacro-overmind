import React from 'react';
import { useActions } from '../state';
import { TokensContainer } from './Board';
import { PlayersContainer } from './PlayersContainer';
import Button from './Button';

export * from './TokensContainer';

const Board = () => {
  const { endTurn } = useActions();

  return (
    <>
      <div tw="flex flex-col justify-center h-full space-y-5">
        <TokensContainer />
      </div>
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button isPrimary onClick={endTurn}>
          End Turn
        </Button>
      </div>
      <div tw="flex flex-col justify-center h-full space-y-5">
        <PlayersContainer />
      </div>
    </>
  );
};

export default Board;

import React from 'react';
import 'twin.macro';
import { TokensContainer } from './Board';
import { PlayersContainer } from './PlayersContainer';

export * from './TokensContainer';

const Board = () => {
  return (
    <div tw="grid grid-flow-col grid-rows-4 grid-cols-9 gap-2 h-screen w-screen">
      <div tw="col-span-6 bg-red-200">Top</div>
      <div tw="col-span-6 bg-red-200">Row 2</div>
      <div tw="col-span-6 bg-red-200">Row 1</div>
      <div tw="col-span-6 bg-red-200">Row 0</div>
      <div tw="row-span-4 p-2 bg-red-200">
        <TokensContainer />
      </div>
      <div tw="row-span-4 col-span-2 ">
        <PlayersContainer />
      </div>
    </div>
  );
};

export default Board;

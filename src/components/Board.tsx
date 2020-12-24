import React from 'react';
import 'twin.macro';
import { TokensContainer } from './Board';
import { PlayersContainer } from './PlayersContainer';

export * from './TokensContainer';

const Board = () => {
  return (
    <div tw="grid grid-flow-col grid-rows-4 grid-cols-9 gap-2 h-screen w-screen overflow-hidden">
      <div tw="col-span-6 bg-red-200 bg-opacity-50">Top</div>
      <div tw="col-span-6 bg-red-200 bg-opacity-50">Row 2</div>
      <div tw="col-span-6 bg-red-200 bg-opacity-50">Row 1</div>
      <div tw="col-span-6 bg-red-200 bg-opacity-50">Row 0</div>
      <div tw="row-span-4 bg-red-200 bg-opacity-50 ">
        <TokensContainer />
      </div>
      <div tw="row-span-4 col-span-2 ">
        <PlayersContainer />
      </div>
    </div>
  );
};

export default Board;

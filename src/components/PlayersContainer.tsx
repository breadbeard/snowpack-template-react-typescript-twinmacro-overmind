import React from 'react';
import 'twin.macro';
import { useState } from '../state';
import { Player } from './Player';
export const PlayersContainer = () => {
  const { playerIdList } = useState();

  return (
    <div tw="flex flex-col">
      {playerIdList.map((id) => (
        <Player id={id} key={id} />
      ))}
    </div>
  );
};

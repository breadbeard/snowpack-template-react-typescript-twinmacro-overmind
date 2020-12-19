import { useState } from '../state';
import { Player } from './Player';
export const PlayersContainer = () => {
  const { playerIdList } = useState();

  return (
    <div>
      {playerIdList.map((id) => (
        <Player id={id} key={id} />
      ))}
    </div>
  );
};

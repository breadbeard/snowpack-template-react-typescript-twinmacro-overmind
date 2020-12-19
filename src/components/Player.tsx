import tw from 'twin.macro';
import { useActions, useState } from '../state';
import { Colors } from '../state/game/color';
import Button from './Button';

interface PlayerProps {
  id: string;
}

export const Player = ({ id }: PlayerProps) => {
  const player = useState().board.players[id];
  const { endTurn } = useActions();
  const { returnToken } = useActions().players;

  console.log('Player render', id);

  return (
    <div
      css={[tw`m-5 p-5`, player.hasTurn && tw`shadow bg-pink-300 rounded-lg`]}
    >
      <div>{player.displayName}</div>

      <Button isPrimary onClick={endTurn}>
        End Turn
      </Button>
      <div>
        {Colors.map((clr) => (
          <Button isSecondary onClick={() => returnToken(clr)} key={clr}>
            {clr}: {player.tokens[clr]}
          </Button>
        ))}
      </div>
    </div>
  );
};

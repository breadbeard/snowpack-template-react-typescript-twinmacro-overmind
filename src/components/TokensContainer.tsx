import 'twin.macro';
import { Colors } from '../state/game/color';
import Token from './Token';

export const TokensContainer = () => {
  return (
    <div tw="flex flex-col justify-between h-full">
      {Colors.map((clr) => (
        <Token clr={clr} key={clr} />
      ))}
    </div>
  );
};

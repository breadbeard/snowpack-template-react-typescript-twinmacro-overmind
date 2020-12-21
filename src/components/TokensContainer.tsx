import 'twin.macro';
import { Colors } from '../state/game/color';
import Token from './Token';

export const TokensContainer = () => {
  return (
    <div tw="grid grid-cols-1 grid-rows-6 h-full">
      {Colors.map((clr) => (
        <Token clr={clr} key={clr} />
      ))}
    </div>
  );
};

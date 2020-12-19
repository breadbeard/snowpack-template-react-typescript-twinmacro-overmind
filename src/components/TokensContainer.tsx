import { Colors } from '../state/game/color';
import Token from './Token';

export const TokensContainer = () => {
  return (
    <div>
      {Colors.map((clr) => (
        <Token clr={clr} key={clr} />
      ))}
    </div>
  );
};

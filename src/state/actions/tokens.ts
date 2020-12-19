import type { Action } from 'overmind';
import type { ColorType } from '../game/color';

export const selectToken: Action<ColorType> = ({ state }, clr) => {
  state.board.tokens[clr]--;
  state.board.players[state.currentPlayerId].tokens[clr]++;
};

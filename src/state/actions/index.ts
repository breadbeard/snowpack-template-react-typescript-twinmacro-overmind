import type { Action } from 'overmind';
import { DorfPlayer, setup as gameSetup } from '../game/index';

export * as players from './players';
export * as tokens from './tokens';

export const endTurn: Action = ({ state }) => {
  state.turn++;
};

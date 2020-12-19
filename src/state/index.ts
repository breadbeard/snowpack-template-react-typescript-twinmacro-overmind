import type { IConfig } from 'overmind';
import {
  createActionsHook,
  createEffectsHook,
  createHook,
  createReactionHook,
  createStateHook,
} from 'overmind-react';
import { DorfPlayer, setup as setupGame } from './game';
import BoardState, { setup as boardSetup } from './game/board';
import * as actions from './actions';

const dorfPlayers: DorfPlayer[] = [
  { id: 'aaa-bbb', displayName: 'Bob Barker' },
  { id: 'ccc-ddd', displayName: 'Susan Smith' },
  { id: 'eee-fff', displayName: 'Greg Great' },
];

export const config = {
  state: setupGame<BoardState>(dorfPlayers, boardSetup),
  actions,
};

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const useGame = createHook<typeof config>();
export const useState = createStateHook<typeof config>();
export const useActions = createActionsHook<typeof config>();
export const useEffects = createEffectsHook<typeof config>();
export const useReaction = createReactionHook<typeof config>();

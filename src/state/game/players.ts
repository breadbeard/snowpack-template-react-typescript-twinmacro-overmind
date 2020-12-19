import { derived } from 'overmind';
import type GameState from '.';
import type { DorfPlayer } from '.';
import type BoardState from './board';
import { TokensState, setup as tokensSetup } from './tokens';

export interface PlayerState {
  id: string;
  displayName: string;
  tokens: TokensState;
  hasTurn: boolean;
}

export interface PlayersState {
  [id: string]: PlayerState;
}

export const setupPlayer = ({ id, displayName }: DorfPlayer): PlayerState => {
  return {
    id,
    displayName,
    tokens: tokensSetup(),
    hasTurn: derived<PlayerState, GameState<BoardState>, boolean>(
      (player, game): boolean => player.id === game.currentPlayerId,
    ),
  };
};

export const setup = (players?: DorfPlayer[]): PlayersState => {
  if (players) {
    return players.reduce((acc: PlayersState, player) => {
      acc[player.id] = setupPlayer(player);
      return acc;
    }, {});
  } else {
    return {};
  }
};

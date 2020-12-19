import { TokensState, setup as tokensSetup } from './tokens';
import { PlayersState, PlayerState, setup as playersSetup } from './players';
import type { BoardSetup } from '.';
import type { DorfPlayer } from '.';

export default interface BoardState {
  tokens: TokensState;
  players: PlayersState;
}

export const setup: BoardSetup<BoardState> = (
  players: DorfPlayer[],
): BoardState => {
  return {
    tokens: tokensSetup(players.length),
    players: playersSetup(players),
  };
};

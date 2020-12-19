import { derived } from 'overmind';

export interface DorfPlayer {
  displayName: string;
  id: string;
}

export default interface GameState<T> {
  players: DorfPlayer[];
  playerIdList: string[];
  board: T;
  turn: number;
  currentPlayerId: string;
}

export type BoardSetup<T> = (players: DorfPlayer[]) => T;

export function setup<T>(
  players: DorfPlayer[],
  boardSetup: BoardSetup<T>,
): GameState<T> {
  return {
    players,
    playerIdList: Object.values(players).map((p) => p.id),
    board: boardSetup(players),
    turn: 0,
    currentPlayerId: derived<GameState<T>, GameState<T>, string>(
      (game): string => game.playerIdList[game.turn % game.playerIdList.length],
    ),
  };
}

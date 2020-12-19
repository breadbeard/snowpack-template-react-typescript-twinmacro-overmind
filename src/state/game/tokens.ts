import type { ColorType } from './color';

export type TokensState = {
  [K in ColorType]: number;
};

const numTokens = (numPlayers: number): number => {
  switch (numPlayers) {
    case 3:
      return 5;
    case 2:
      return 4;
    default:
      return 7;
  }
};

export const setup = (numPlayers?: number): TokensState => {
  if (numPlayers) {
    const num = numTokens(numPlayers);
    return {
      bk: num,
      wh: num,
      re: num,
      gr: num,
      bl: num,
      go: 5,
    };
  } else {
    return {
      bk: 0,
      wh: 0,
      re: 0,
      gr: 0,
      bl: 0,
      go: 0,
    };
  }
};

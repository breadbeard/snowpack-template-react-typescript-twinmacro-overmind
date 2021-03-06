import Color from './color';
import type { ColorType } from './color';
import type { TokensState } from './tokens';

export interface Card {
  id: number;
  row: number;
  clr: ColorType;
  pts: number;
  cost: TokensState;
}

type cardTableRow = [
  number,
  ColorType,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

const cardTable: Array<cardTableRow> = [
  [0, Color.bk, 0, 0, 1, 1, 1, 1, 0],
  [0, Color.bk, 0, 0, 0, 1, 0, 2, 0],
  [0, Color.bk, 0, 0, 2, 0, 0, 2, 0],
  [0, Color.bk, 0, 1, 0, 3, 0, 1, 0],
  [0, Color.bk, 0, 0, 0, 0, 0, 3, 0],
  [0, Color.bk, 0, 0, 1, 1, 2, 1, 0],
  [0, Color.bk, 0, 0, 2, 1, 2, 0, 0],
  [0, Color.bk, 1, 0, 0, 0, 4, 0, 0],
  [1, Color.bk, 1, 0, 3, 0, 2, 2, 0],
  [1, Color.bk, 1, 2, 3, 0, 0, 3, 0],
  [1, Color.bk, 2, 0, 0, 2, 1, 4, 0],
  [1, Color.bk, 2, 0, 5, 0, 0, 0, 0],
  [1, Color.bk, 2, 0, 0, 3, 0, 5, 0],
  [1, Color.bk, 3, 6, 0, 0, 0, 0, 0],
  [2, Color.bk, 3, 0, 3, 3, 3, 5, 0],
  [2, Color.bk, 4, 0, 0, 7, 0, 0, 0],
  [2, Color.bk, 4, 3, 0, 6, 0, 3, 0],
  [2, Color.bk, 5, 3, 0, 7, 0, 0, 0],

  [0, Color.bl, 0, 2, 1, 0, 0, 0, 0],
  [0, Color.bl, 0, 1, 1, 2, 0, 1, 0],
  [0, Color.bl, 0, 1, 1, 1, 0, 1, 0],
  [0, Color.bl, 0, 0, 0, 1, 1, 3, 0],
  [0, Color.bl, 0, 3, 0, 0, 0, 0, 0],
  [0, Color.bl, 0, 0, 1, 2, 0, 2, 0],
  [0, Color.bl, 0, 2, 0, 0, 0, 2, 0],
  [0, Color.bl, 1, 0, 0, 4, 0, 0, 0],
  [1, Color.bl, 1, 0, 0, 3, 2, 2, 0],
  [1, Color.bl, 1, 3, 0, 0, 2, 3, 0],
  [1, Color.bl, 2, 0, 5, 0, 3, 0, 0],
  [1, Color.bl, 2, 0, 0, 0, 5, 0, 0],
  [1, Color.bl, 2, 4, 2, 1, 0, 0, 0],
  [1, Color.bl, 3, 0, 0, 0, 6, 0, 0],
  [2, Color.bl, 3, 5, 3, 3, 0, 3, 0],
  [2, Color.bl, 4, 0, 7, 0, 0, 0, 0],
  [2, Color.bl, 4, 3, 6, 0, 3, 0, 0],
  [2, Color.bl, 5, 0, 7, 0, 3, 0, 0],

  [0, Color.gr, 0, 0, 2, 0, 1, 0, 0],
  [0, Color.gr, 0, 0, 0, 2, 2, 0, 0],
  [0, Color.gr, 0, 0, 1, 0, 3, 1, 0],
  [0, Color.gr, 0, 1, 1, 1, 1, 0, 0],
  [0, Color.gr, 0, 2, 1, 1, 1, 0, 0],
  [0, Color.gr, 0, 2, 0, 2, 1, 0, 0],
  [0, Color.gr, 0, 0, 0, 3, 0, 0, 0],
  [0, Color.gr, 1, 4, 0, 0, 0, 0, 0],
  [1, Color.gr, 1, 0, 3, 3, 0, 2, 0],
  [1, Color.gr, 1, 2, 2, 0, 3, 0, 0],
  [1, Color.gr, 2, 1, 4, 0, 2, 0, 0],
  [1, Color.gr, 2, 0, 0, 0, 0, 5, 0],
  [1, Color.gr, 2, 0, 0, 0, 5, 3, 0],
  [1, Color.gr, 3, 0, 0, 0, 0, 6, 0],
  [2, Color.gr, 3, 3, 5, 3, 3, 0, 0],
  [2, Color.gr, 4, 0, 3, 0, 6, 3, 0],
  [2, Color.gr, 4, 0, 0, 0, 7, 0, 0],
  [2, Color.gr, 5, 0, 0, 0, 7, 3, 0],

  [0, Color.re, 0, 0, 3, 0, 0, 0, 0],
  [0, Color.re, 0, 3, 1, 1, 0, 0, 0],
  [0, Color.re, 0, 0, 0, 0, 2, 1, 0],
  [0, Color.re, 0, 2, 2, 0, 0, 1, 0],
  [0, Color.re, 0, 1, 2, 0, 1, 1, 0],
  [0, Color.re, 0, 1, 1, 0, 1, 1, 0],
  [0, Color.re, 0, 0, 2, 2, 0, 0, 0],
  [0, Color.re, 1, 0, 4, 0, 0, 0, 0],
  [1, Color.re, 1, 3, 0, 2, 3, 0, 0],
  [1, Color.re, 1, 3, 2, 2, 0, 0, 0],
  [1, Color.re, 2, 0, 1, 0, 4, 2, 0],
  [1, Color.re, 2, 5, 3, 0, 0, 0, 0],
  [1, Color.re, 2, 5, 0, 0, 0, 0, 0],
  [1, Color.re, 3, 0, 0, 6, 0, 0, 0],
  [2, Color.re, 3, 3, 3, 0, 5, 3, 0],
  [2, Color.re, 4, 0, 0, 0, 0, 7, 0],
  [2, Color.re, 4, 0, 0, 3, 3, 6, 0],
  [2, Color.re, 5, 0, 0, 3, 0, 7, 0],

  [0, Color.wh, 0, 1, 0, 0, 2, 2, 0],
  [0, Color.wh, 0, 1, 0, 2, 0, 0, 0],
  [0, Color.wh, 0, 1, 0, 1, 1, 1, 0],
  [0, Color.wh, 0, 0, 0, 0, 3, 0, 0],
  [0, Color.wh, 0, 0, 0, 0, 2, 2, 0],
  [0, Color.wh, 0, 1, 0, 1, 1, 2, 0],
  [0, Color.wh, 0, 1, 3, 0, 1, 0, 0],
  [0, Color.wh, 1, 0, 0, 0, 0, 4, 0],
  [1, Color.wh, 1, 2, 0, 2, 0, 3, 0],
  [1, Color.wh, 1, 0, 2, 3, 3, 0, 0],
  [1, Color.wh, 2, 2, 0, 4, 0, 1, 0],
  [1, Color.wh, 2, 0, 0, 5, 0, 0, 0],
  [1, Color.wh, 2, 3, 0, 5, 0, 0, 0],
  [1, Color.wh, 3, 0, 6, 0, 0, 0, 0],
  [2, Color.wh, 3, 3, 0, 5, 3, 3, 0],
  [2, Color.wh, 4, 7, 0, 0, 0, 0, 0],
  [2, Color.wh, 4, 6, 3, 3, 0, 0, 0],
  [2, Color.wh, 5, 7, 3, 0, 0, 0, 0],
];

const createCard = (
  id: number,
  row: number,
  clr: ColorType,
  pts: number,
  bk: number,
  wh: number,
  re: number,
  bl: number,
  gr: number,
  go: number,
): Card => {
  return {
    id,
    row,
    clr,
    pts,
    cost: { bk, wh, re, bl, gr, go },
  };
};

export default cardTable.map((c, i) => createCard(i, ...c)) as Array<Card>;

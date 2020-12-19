enum ColorEnum {
  bk,
  wh,
  re,
  gr,
  bl,
  go,
}
export type ColorType = keyof typeof ColorEnum;
export const Colors = <ColorType[]>(
  Object.values(ColorEnum).filter((e) => typeof e === 'string')
);

const Color = Colors.reduce(
  (acc: { [K in ColorType]?: ColorType }, clr: ColorType) => {
    acc[clr] = clr as ColorType;
    return acc;
  },
  {},
) as { [K in ColorType]: ColorType };
export default Color;

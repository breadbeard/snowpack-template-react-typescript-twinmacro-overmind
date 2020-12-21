import tw from 'twin.macro';
import { useActions, useState } from '../state';
import type { ColorType } from '../state/game/color';

interface TokenProps {
  clr: ColorType;
}

const Token = ({ clr }: TokenProps) => {
  const numTokens = useState().board.tokens[clr];
  const { selectToken } = useActions().tokens;

  console.log('Token render', clr);
  const bg = {
    bk: tw`text-gray-800`,
    wh: tw`text-gray-50`,
    re: tw`text-red-600`,
    gr: tw`text-green-600`,
    bl: tw`text-blue-600`,
    go: tw`text-yellow-600`,
  };
  const fg = {
    bk: tw`text-gray-400`,
    wh: tw`text-gray-400`,
    re: tw`text-red-400`,
    gr: tw`text-green-400`,
    bl: tw`text-blue-400`,
    go: tw`text-yellow-400`,
  };

  return (
    <div tw="relative h-full w-full" onClick={() => selectToken(clr)}>
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        css={[tw`fill-current`, bg[clr]]}
      >
        <circle cx="50" cy="50" r="40"></circle>
      </svg>
      <div tw="absolute top-0 left-0 w-full h-full">
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          css={[tw`fill-current`, fg[clr]]}
        >
          <text
            x="50"
            y="55"
            dominant-baseline="middle"
            text-anchor="middle"
            css={[tw`text-6xl font-black`]}
          >
            {numTokens}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Token;

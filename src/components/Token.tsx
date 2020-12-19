import React from 'react';
import { useActions, useGame, useState } from '../state';
import type { ColorType } from '../state/game/color';
import Button from './Button';

interface TokenProps {
  clr: ColorType;
}

const Token = ({ clr }: TokenProps) => {
  const numTokens = useState().board.tokens[clr];
  const { selectToken } = useActions().tokens;

  console.log('Token render', clr);

  return (
    <Button isPrimary onClick={() => selectToken(clr)}>
      {clr}: {numTokens}
    </Button>
  );
};

export default Token;

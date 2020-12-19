import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import Board from './components/Board';

const Splendorf = () => {
  return (
    <div>
      <GlobalStyles />
      <div css={[tw`h-screen`, tw`bg-gradient-to-b from-electric to-ribbon`]}>
        <Board />
      </div>
    </div>
  );
};

export default Splendorf;

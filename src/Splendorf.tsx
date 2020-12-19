import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import Board from './components/Board';

const Splendorf = () => {
  return (
    <div>
      <GlobalStyles />
      <div
        css={[
          tw`flex flex-col items-center justify-center h-screen`,
          tw`bg-gradient-to-b from-electric to-ribbon`,
        ]}
      >
        <Board />
      </div>
    </div>
  );
};

export default Splendorf;

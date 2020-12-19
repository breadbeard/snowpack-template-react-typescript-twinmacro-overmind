import * as React from 'react';
import { render } from 'react-dom';
import { createOvermind } from 'overmind';
import { Provider as GameProvider } from 'overmind-react';
import { config } from './state';
import Splendorf from './Splendorf';
import type { DorfPlayer } from './state/game';

const game = createOvermind(config);

render(
  <React.StrictMode>
    <GameProvider value={game}>
      <Splendorf />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

import tw, { GlobalStyles } from 'twin.macro';
import { Button, Logo } from './components';
import { useOvermind, useState, useActions } from './overmind';

const App = () => {
  // General
  const { state, actions, effects, reaction } = useOvermind();
  // Or be specific
  const { isLoggedIn } = useState().auth;
  const { login, logout } = useActions().auth;

  return (
    <div>
      <GlobalStyles />
      <div
        css={[
          tw`flex flex-col items-center justify-center h-screen`,
          tw`bg-gradient-to-b from-electric to-ribbon`,
        ]}
      >
        <div tw="flex flex-col justify-center h-full space-y-5">
          {!isLoggedIn && (
            <Button isPrimary onClick={login}>
              Login
            </Button>
          )}
          {isLoggedIn && (
            <Button isSecondary onClick={logout}>
              Logout
            </Button>
          )}
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default App;

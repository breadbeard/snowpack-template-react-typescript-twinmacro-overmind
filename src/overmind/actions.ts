interface State {
  auth: { isLoggedIn: boolean };
}

export const auth = {
  login: ({ state }: { state: State }) => {
    state.auth.isLoggedIn = true;
  },
  logout: ({ state }: { state: State }) => {
    state.auth.isLoggedIn = false;
  },
};

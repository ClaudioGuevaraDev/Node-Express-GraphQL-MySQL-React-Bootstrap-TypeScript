import { createContext } from "react";

import { AppContextProps, ContextState } from "../interfaces/Context";

export const initialState: ContextState = {
  token: "",
  logged: false,
  username: "",
  rol: ""
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => {},
});

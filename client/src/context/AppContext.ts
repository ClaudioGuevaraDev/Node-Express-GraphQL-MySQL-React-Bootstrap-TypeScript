import { createContext } from "react";

import { AppContextProps, ContextState } from "../interfaces/Context";

export const initialState: ContextState = {
  token: "",
  logged: false,
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => {},
});

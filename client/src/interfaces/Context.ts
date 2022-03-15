import { Dispatch } from "react";

export interface AppContextProps {
  state: ContextState;
  dispatch: Dispatch<ReducerAction>;
}

export interface ContextState {
  token?: string;
  logged?: boolean;
  username?: string;
  rol?: string;
}

export interface ReducerAction {
  type: string;
  payload: ContextState;
}

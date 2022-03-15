import { ContextState, ReducerAction } from "../interfaces/Context";
import { LOGGED_USER } from "./AppConstants";

export const AppReducer = (state: ContextState, action: ReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    case LOGGED_USER:
      return {
        ...state,
        token: payload.token,
        logged: payload.logged,
        username: payload.username,
        rol: payload.rol
      };
    default:
      return state;
  }
};

import { createSelector } from "reselect";

import { RootState } from "../store";
import { UserState } from "./user.reducer";

export const selectCartReducer = (state: RootState): UserState => state.user

export const selectCurrentUser = createSelector(
  selectCartReducer,
  (user) => user.currentUser
);
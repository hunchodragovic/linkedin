import { auth, provider } from "../../config/firebase";
import * as actions from "./actions";
import { signInWithPopup } from "firebase/auth";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}
export function getUserAuth() {
  // to change user account which stored in Redux
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}
export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
        // Redirect to login after sign-out
      })
      .catch((error) => alert(error.message));
  };
}

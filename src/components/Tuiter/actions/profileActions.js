import { Dispatch } from "react";
import { actionTypes } from "../Constants/actionTypes";

export function editProfile(payload) {
    return async () => {
      const action = {
        type: actionTypes.EDIT_PROFILE,
        payload: payload
      };
      dispatch(action)
    }
  }
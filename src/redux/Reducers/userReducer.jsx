import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../util/config";

const initialState = {
  userLogin: localStorage.getItem(USER_LOGIN)
    ? JSON.parse(localStorage.getItem(USER_LOGIN))
    : null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { setUserLoginAction, userLogin } = userReducer.actions;

export default userReducer.reducer;

// -----------Action Api--------------

export const signInAPI = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });

      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setStoreJSON(USER_LOGIN, result.data.content);

      const action = setUserLoginAction(result.data.content);
      dispatch(action);
      alert(result.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };
};

export const postOderAPI = async (order) => {
  
  try {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/order",
      method: "POST",
      data: order,
    });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

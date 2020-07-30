import axios from "axios";
import { returnErrors } from "./errorActions";

import { message } from "antd";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

import setAuthToken from "../utils/setAuthToken";
//Check token and load user

export const loadUser = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:8000/auth/user");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register user

export const register = ({ role, name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ role, name, email, password });

  try {
    const res = await axios.post(
      "http://localhost:8000/user/add",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    message.success("Successfully Registered!", 3);
  } catch (err) {
    // dispatch(
    //   returnErrors(err.response.data, err.response.status, "REGISTRATION_FAIL")
    // );
    dispatch({
      type: REGISTER_FAIL,
    });

    message.error("Email has already been taken.", 3);
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = await axios.post(
      "http://localhost:8000/auth/login",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    message.success("Welcome back", 3);
  } catch (err) {
    console.log(err);

    dispatch({
      type: LOGIN_FAIL,
    });

    message.error("Login unsuccessful!", 3);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
    message.success("See you again!")
};

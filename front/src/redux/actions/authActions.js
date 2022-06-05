import {
  GET_PROFILE_FAILED,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./authTypes";
import { setToken } from "../../helpers/helpers";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";

export const register = (info) => async (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const { data } = await axios.post("/api/user/register", info);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
    toast.success("REGISTER SUCCESS", {
      theme: "colored",
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(error.response.data);
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        toast.error(`${err.msg}`, {
          theme: "colored",
          position: toast.POSITION.BOTTOM_CENTER,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response.data.errors,
    });
  }
};

export const login = (info) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const res = await axios.post("/api/user/login", info);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    toast.success("LOGIN SUCCESS", {
      theme: "colored",
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
      payload: err.response.data.errors,
    });
    toast.error(`${err.response.data.errors[0].msg}`, {
      theme: "colored",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_LOADING });
  try {
    setToken();
    const res = await axios.get("/api/user/getProfile");
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: err.response.data.errors,
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

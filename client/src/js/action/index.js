import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
} from "../const/actionTypes";
import axios from "axios";

export const getUser = () => async (dispatch) => {
  dispatch({
    type: GET_USER,
  });
  try {
    const { data } = await axios.get("/api/users");
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
    });
  }
};

export const addUser = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_USER,
  });
  try {
    const { data } = await axios.post("/api/add_user", formData);
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
    });
  }
};

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({
    type: UPDATE_USER,
  });
  try {
    const { data } = await axios.put(`/api/users/${id}`, formData);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_USER,
  });
  try {
    const { data } = await axios.delete(`/api/users/${id}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
    });
  }
};

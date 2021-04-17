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

const initialState = {
  isLoading: false,
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
    case ADD_USER:
    case UPDATE_USER:
    case DELETE_USER:
      return { ...state, isLoading: true };

    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    case ADD_USER_SUCCESS:
      return { ...state, isLoading: false, users: [...state.users, payload] };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.map((user) =>
          user._id === payload._id ? { ...user, ...payload } : user
        ),
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.filter((user) => user._id !== payload._id),
      };

    case GET_USER_FAIL:
    case ADD_USER_FAIL:
    case UPDATE_USER_FAIL:
    case DELETE_USER_FAIL:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default userReducer;

import axios from "axios";
import { ERROR, ISAUTH, LOADING } from "../actionType";
import { loginAPI, registerAPI } from "../../utils/api";

export const register = (data) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        const res = await axios.post(registerAPI, data);
        if (res.status === 200) {
            dispatch({ type: ISAUTH, payload: res.data });
        } else {
            dispatch({ type: ERROR, payload: res.data });
        }
    } catch (err) {
        dispatch({ type: ERROR, payload: err.message });
    }
}

export const login = (data) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        const res = await axios.post(loginAPI, data);
        if (res.status === 200) {
            dispatch({ type: ISAUTH, payload: res.data });
        } else {
            dispatch({ type: ERROR, payload: res.data });
        }
    } catch (err) {
        dispatch({ type: ERROR, payload: err.message });
    }
}
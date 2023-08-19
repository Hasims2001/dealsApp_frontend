import { ERROR, ISAUTH, LOADING } from "../actionType";

const init = {
    isLoading: false,
    isError: "",
    isAuth: false
};

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ERROR:
            return {
                ...state,
                isError: payload,
                isLoading: false,
            };
        case ISAUTH:
            return {
                ...state,
                isLoading: false,
                isAuth: true
            }
        default:
            return state;
    }
};

import {createActions, createReducer} from "reduxsauce";

export const { Creators, Types } = createActions({
    requestWorld: ["language"],
    requestWorldSuccess: ["payload", "isLoading"],
    requestWorldFail: ["error", "isLoading"]
});

const INITIAL_STATE = {
    isLoading: false,
    language: "",
    header: [],
    aside: [],
    footer: [],
};

const requestWorld = (state) => ({
    ...state,
    isLoading: true,
});

const requestWorldSuccess = (state, { payload: { language, header, aside, footer } }) => ({
    ...state,
    language,
    header,
    aside,
    footer,
});

const requestWorldFail = (state, error) => ({
    ...state,
    error,
    isLoading: false,
});

export default createReducer(INITIAL_STATE, {
    [Types.REQUEST_WORLD]: requestWorld,
    [Types.REQUEST_WORLD_SUCCESS]: requestWorldSuccess,
    [Types.REQUEST_WORLD_FAIL]: requestWorldFail,
});
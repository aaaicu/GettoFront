import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 300*1000;

export const tokenSlice = createSlice({
    name: 'profile',
    initialState: {
        authenticated: false,
        // accessToken: null,
        nickname: null,
        thumbnailImageUrl: null,
        expireTime: null
    },
    reducers: {
        SET_LOGIN: (state, action) => {
            state.authenticated = true;
            state.nickname = action.payload.nickname;
            state.thumbnailImageUrl = action.payload.thumbnailImageUrl;
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        SET_LOGOUT: (state) => {
            state.authenticated = false;
            state.nickname = null;
            state.thumbnailImageUrl = null;
            state.expireTime = null
        },
    }
})

export const { SET_LOGIN, SET_LOGOUT } = tokenSlice.actions;

export default tokenSlice.reducer;

// source : https://5xjin.github.io/blog/react_jwt_router/
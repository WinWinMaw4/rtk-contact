

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const authSlice = createSlice({
    name:'auth',
    initialState: {user: null, token: null},
    reducers:{
        addUser: (state, {payload}) => {
            // console.log('from rtk this is auth slice',payload);
            state.user = payload.user;
            state.token = payload.token;
            Cookies.set ("user",JSON.stringify(state.user), {expires: 1});
            Cookies.set("token",state.token, {expires: 1})
        },
        removeUser: (state) => {
            state.user = null,
            state.token = null,
            Cookies.remove("user");
            Cookies.remove("token");
        }
    }
})

export const {addUser, removeUser} = authSlice.actions;
export default authSlice.reducer;
import {  handleLogout,  handleRefresh,  handleRefreshPending,  handleRefreshRejected,  handleSetUser, handleSetUserRejected } from "store/contacts/handlers/handlers";
import { login, logout, refresh, register } from "./operations/operations";

import { createSlice } from '@reduxjs/toolkit'
import { clearContacts } from "store/contacts/contactsSlice";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, handleSetUser)
            .addCase(login.fulfilled, handleSetUser)
            .addCase(register.rejected, handleSetUserRejected)
            .addCase(login.rejected, handleSetUserRejected)
            .addCase(logout.fulfilled, (state) => { handleLogout(state); clearContacts(state) })
        .addCase(refresh.pending, handleRefreshPending)
            .addCase(refresh.fulfilled, handleRefresh)
        .addCase(refresh.rejected, handleRefreshRejected)
            
    }
})
export const authReducer = authSlice.reducer;
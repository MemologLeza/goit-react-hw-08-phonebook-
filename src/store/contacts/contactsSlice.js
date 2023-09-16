import { createSlice } from '@reduxjs/toolkit'
import { handleAddContact, handleDeleteContact, handleFetchContacts, handleFulfilled, handlePending, handleRejected } from 'store/handlers/handlers';
import { addContactThunk, deleteContactThunk, getContactsThunk } from 'store/thunks/thunk';
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: null,
        isLoading: false,
        error:''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContactsThunk.fulfilled, handleFetchContacts)
            .addCase(addContactThunk.fulfilled, handleAddContact)
            .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
            .addMatcher((action)=>action.type.endsWith('/rejected'), handleRejected)
    }
})
export const contactsReducer = contactsSlice.reducer;
export const {createContact, deleteContacts} = contactsSlice.actions;
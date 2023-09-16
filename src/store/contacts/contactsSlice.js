import { createSlice } from '@reduxjs/toolkit'
import { handleAddContact, handleDeleteContact, handleFetchContacts, handleFulfilled, handlePending, handleRejected } from 'store/contacts/handlers/handlers';
import { addContactThunk, deleteContactThunk, getContactsThunk } from 'store/contacts/thunks/thunk';
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: null,
        isLoading: false,
        error:''
    },
    reducers: {
        
        clearContacts: (state) => {
            state.contacts[0]= 'huj';
            console.log('yes')
        }
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
export const {clearContacts} = contactsSlice.actions;
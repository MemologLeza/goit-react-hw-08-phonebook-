import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "contactsAPI/contactsAPI";

export const getContactsThunk = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await fetchContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    
    });
export const addContactThunk = createAsyncThunk("contacts/addContact",
    async ({name, phone}, thunkAPI) => {
        try {
           const data = await addContact({name, phone});
        return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
       }
    
    })
export const deleteContactThunk = createAsyncThunk("contacts/deleteContact",
    async (id, thunkAPI) => {
    try {
        const data = await deleteContact(id);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}

)
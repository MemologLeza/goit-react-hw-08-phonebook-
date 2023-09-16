import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filter/filterSlice";
import { authReducer } from "./auth/slice";

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
})
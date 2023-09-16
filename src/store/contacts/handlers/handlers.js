import Notiflix from "notiflix";
// import { clearContacts } from "../contactsSlice";
export const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
   
};
export const handleFulfilled = (state) => {
    state.isLoading = false
    state.error = ''
}
export const handleRejected = (state, {error, payload }) => {
    state.isLoading = false
    state.error = payload ?? error.message
}
export const handleFetchContacts = (state, {payload}) =>{
    state.contacts = payload
}
export const handleAddContact = (state, { payload }) => {
    state.contacts = [payload, ...state.contacts]
}
export const handleDeleteContact = (state, { payload }) => {
    state.contacts = state.contacts.filter(el => el.id !== payload.id)
}
export const handleSetUser = (state, { payload }) => {
    
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
}
export const handleSetUserRejected = () => {
    Notiflix.Notify.failure('Wrong email or password');
}
export const handleLogout = ( state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    Notiflix.Notify.success('Log out is success');
}
export const handleRefreshPending = (state) => {
    state.isRefreshing = true
}
export const handleRefresh = (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}
export const handleRefreshRejected = (state, { payload }) => {
    state.isRefreshing = false;


}
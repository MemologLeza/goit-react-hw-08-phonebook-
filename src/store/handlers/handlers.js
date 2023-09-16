export const handlePending = (state) => {
    state.isLoading = true
    state.error = ''
};
export const handleFulfilled = (state) => {
    state.isLoading = false
}
export const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
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
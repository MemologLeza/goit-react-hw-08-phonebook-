import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => { 
    const { data } = await axios('/contacts');
    return data;
}
export const addContact = async (data) => {
    const respons = await axios.post('/contacts', data)
    return respons.data
}
export const deleteContact = async (id) => {
    const respons = await axios.delete(`/contacts/${id}`)
    return respons.data
 } 
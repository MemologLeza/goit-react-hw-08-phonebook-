import axios from "axios";
axios.defaults.baseURL = 'https://64f86cab824680fd217f8c7a.mockapi.io';

export const fetchContacts = async () => { 
          const { data } = await axios('/contacts');
    return data;
}
export const addContact = async ({name, phone}) => {
    const respons = await axios.post('/contacts', { name, phone })
    return respons.data
}
export const deleteContact = async (id) => {
    const respons = await axios.delete(`/contacts/${id}`)
    return respons.data
 } 
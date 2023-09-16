import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { getContactsThunk } from 'store/thunks/thunk';
import { useEffect } from 'react';

const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    !contacts && dispatch(getContactsThunk());
  }, [dispatch, contacts]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {contacts && (
        <ul>
          {filterContacts().map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;

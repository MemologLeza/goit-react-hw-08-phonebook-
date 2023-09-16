import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { getContactsThunk } from '../../store/contacts/thunks/thunk';
import { useEffect } from 'react';

const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContacts = () => {
    if (filter.length <= 0) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isLoading && <h2 className="mb-3 fs-3">Loading...</h2>}
      {error && <h2 className="mb-3 fs-3"> {error}</h2>}
      {contacts && (
        <>
          <p className="mb-3 fs-3"> Your Contacts:</p>
          <ul className="list-group list-group-flush">
            {filterContacts().length !== 0 ? (
              filterContacts().map(contact => (
                <ContactItem key={contact.id} contact={contact} />
              ))
            ) : (
              <p className="mb-3 fs-3">Not found</p>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default ContactList;

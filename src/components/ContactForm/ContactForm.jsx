import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../store/contacts/thunks/thunk';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const isDuplicate = name => contacts.find(contact => contact.name === name);

  const handleCreateContact = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (isDuplicate(name)) {
      e.target.reset();
      return Notiflix.Notify.warning(`${name} is already in contacts(( `);
    }
    dispatch(addContactThunk({ name, number }));
    e.target.reset();
  };
  return (
    <form onSubmit={handleCreateContact}>
      <p className="mb-3 fs-3">Add new contact </p>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
          <input
            type="tel"
            name="number"
            className="form-control"
            id="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button type="submit" className="btn btn-success">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

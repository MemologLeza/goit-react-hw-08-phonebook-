import styled from './ContacrForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/thunks/thunk';
const ContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const isDuplicate = name => contacts.find(contact => contact.name === name);

  const handleCreateContact = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.number.value;
    if (isDuplicate(name)) {
      e.target.reset();
      return alert(`${name} is already in contacts(( `);
    }
    dispatch(addContactThunk({ name, phone }));
    e.target.reset();
  };
  return (
    <form className={styled.form} onSubmit={handleCreateContact}>
      <label htmlFor="name">
        Name
        <input
          className={styled.input}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          className={styled.input}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={styled.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

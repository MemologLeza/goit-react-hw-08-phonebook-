import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="mb-5">
        <ContactForm />
      </div>
      <div className="mb-4">
        <Filter />
      </div>
      <div className="mb-5">
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;

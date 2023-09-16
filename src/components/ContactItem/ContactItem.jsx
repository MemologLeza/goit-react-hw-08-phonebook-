import PropTypes from 'prop-types';
import styled from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/thunks/thunk';
const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <li className={styled.item}>
      {name}: {phone}
      <button className={styled.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default ContactItem;

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../store/contacts/thunks/thunk';
const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <p className=" fs-4 ">
        {name}: {number}
      </p>
      <button
        type="button"
        className="btn btn-danger btn-sm "
        onClick={handleDelete}
      >
        {' '}
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default ContactItem;

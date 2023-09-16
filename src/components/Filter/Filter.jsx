import { setFilter } from '../../store/contacts/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onFilterChange = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };
  return (
    <div className="mb-3">
      <p className="mb-3 fs-3">Find a contact by name</p>

      <label className="form-label">
        <input
          className="form-control"
          type="text"
          name="filter"
          placeholder="Any name"
          onChange={e => onFilterChange(e)}
          value={filter}
        />
      </label>
    </div>
  );
};

export default Filter;

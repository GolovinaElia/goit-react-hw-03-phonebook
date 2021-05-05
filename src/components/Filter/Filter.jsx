import style from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={style.filter}>
    <label className={style.filterLabel}>
      Find contact by name
      <input
        className={style.filterInput}
        type="text"
        autoComplete="off"
        name="name"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

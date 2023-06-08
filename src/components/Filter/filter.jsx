import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Filter/filter.module.css'

const Filter = ({ value, onChange }) => (
  <div>
    <label className={style.label_filter} htmlFor=""> Filtr by Name</label>
    <input className={style.input_filter} type="text" value={value} onChange={onChange} />
  </div>
  
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

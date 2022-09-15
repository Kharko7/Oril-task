import React, { useState } from 'react';
import { useStyles } from './nav-sort.styles';
import { MenuItem, TextField } from '@mui/material';
import { sortByDate } from '../../utils/sort-by-date';
import { labels } from '../../configs/filter-labels';
import { sortByStatus } from '../../utils/sort-by-starus';

const NavSort = ({ setData, data }) => {
  const styles = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const result = labels.find((item) => item.value === event.target.value);
    setValue(event.target.value);
    if (result.key === 'status') {
      sortByStatus(data, result.type, setData)
    };
    if (result.key === 'date') {
      sortByDate(result.type, data, setData)
    };
  };

  const optionElems = labels.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <div className={styles.sort}>
      <TextField
        className={styles.container}
        id="standard-select-currency"
        select
        label="Select"
        value={value}
        onChange={handleChange}
        variant="standard"
      >
        {optionElems}
      </TextField>
    </div>
  );
};

export default NavSort;

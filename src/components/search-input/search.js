import React from 'react';
import { useStyles } from './search.styles';
import SearchLogo from '../../images/Icon-search.svg'

const Search = ({ setSearch, value }) => {
  const styles = useStyles();

  return (
    <div className={styles.inputBody}>
    <label htmlFor="inputImg">
      <img src={SearchLogo} alt='search' />
    </label>
    <input onChange={(v) => setSearch(v.currentTarget.value)} value={value} id="inputImg" placeholder='Search' className={styles.input} />
  </div>
  );
};

export default Search;

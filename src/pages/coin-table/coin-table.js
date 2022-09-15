import React, { useEffect, useState } from 'react';
import { useStyles } from './coin-table.style';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import routes from '../../configs/routes';
import NavSort from '../../components/nav-sort/nav-sort';
import { getTime } from '../../utils/get-time-format'
import Search from '../../components/search-input/search';

const CoinTable = () => {
  const { statistic } = routes
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const regExp = new RegExp(search.trim(), 'i');
  const arrayCoins = data.filter(coin => coin.name.search(regExp) !== -1)

  useEffect(() => {
    axios.get('https://oril-coins-test.herokuapp.com/list').then((response) => {
      if (response.data) {
        setData(response.data)
      }
    }).catch(error => console.error(`Error ${error}`))
  }, []);

  const tableBody = arrayCoins.map(item => (
    <NavLink onClick={() => sessionStorage.setItem('IdCoin', item.id)} key={item.id} to={statistic}>
      <tr className={styles.rowCoin} key={item.id} >
        <td style={{ color: 'black', fontWeight: '500' }}>{item.name}</td>
        <td>{getTime(item.date)}</td>
        <td>{item.isActive ?
          <span style={{ color: 'blue' }}>Active</span> :
          <span style={{ color: 'red' }}>Disable</span>}</td>
      </tr>
    </NavLink>
  ))

  return (
    <div className={styles.container}>
      <div className={styles.bodyFiltering}>
        <Search value={search} setSearch={setSearch}/>
        <NavSort data={data} setData={setData} />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DATE</th>
            <th>STATE</th>
          </tr>
        </thead>
        <tbody>
          {tableBody.length ?
            tableBody :
            <tr>
              <td colSpan='3' align='center' style={{ color: 'black' }} >Nothing found</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable
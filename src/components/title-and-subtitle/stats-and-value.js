import React from 'react';
import { useStyles } from './stats-and-value.styles';

const StatsAndValue = ({ title, value }) => {
  const styles = useStyles();

  return (
    <div className={styles.statsBody}>
      <p>{title}</p>
      <h3>$ {value}</h3>
    </div>
  );
};

export default StatsAndValue;

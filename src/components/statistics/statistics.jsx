import React from "react";
import styles from "./statistics.module.css";
import PropTypes from "prop-types";
const Statistics = ({ data }) => {
  return (
    <>
      <section className={styles.statistics}>
        <h1>Upload stats</h1>
        <ul className={styles.stat__list}>
          {data.map((item) => (
            <li className={styles[item.id]} key={item.id}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
Statistics.prototype = {
  data: PropTypes.object.isRequired,
};
export default Statistics;

import React from "react";
import "./statistics.css";

const Statistics = ({ data }) => {
  return (
    <>
      <section className="statistics">
        <h1>Upload stats</h1>
        <ul className="stat-list">
          {data.map((item) => (
            <li className={item.id} key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Statistics;

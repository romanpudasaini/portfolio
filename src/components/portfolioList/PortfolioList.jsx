/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./PortfolioList.css";
import Portfolio from "../portfolio/Portfolio";

const PortfolioList = ({ title, id, active, setSelected }) => {
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./portfolio.css";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setdata] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Moile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "contact",
      title: "Content",
    },
  ];
  useEffect(() => {
    return () => {
      switch (selected) {
        case "featured":
          setdata(featuredPortfolio);
          break;
        case "web":
          setdata(webPortfolio);
          break;
        case "mobile":
          setdata(mobilePortfolio);
          break;
        case "design":
          setdata(designPortfolio);
          break;
        case "content":
          setdata(contentPortfolio);
          break;
        default:
          setdata(featuredPortfolio);
      }
    };
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          // eslint-disable-next-line react/jsx-key
          <div className="item">
            <img className="img-fluid" src={d.img} alt="" />
            <h3 className="h3">{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./testinomial.css";

const Testinomial = () => {
  const data = [
    {
      id: 1,
      name: "Roman Pudasaini",
      title: "Senior Developer",
      img: "assets/roman.png",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Rani Devi",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Bishwa Mishra",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonial">
      <h1 className="testi">Testimonials</h1>
      <div className="testicontainer">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="tleft" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="tright" src={d.icon} alt="" />
            </div>
            <div className="tcenter">{d.desc}</div>
            <div className="bottom">
              <h3 className="testih3">{d.name}</h3>
              <h4 className="testih4">{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testinomial;

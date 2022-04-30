import React from 'react'
import { Avatar } from "@material-ui/core";
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/InfoOutlined";
function Widgets() {
    const newsArticle = (heading, subtitle) => (
      <div className="widget__article">
        <div className="widgets__left">
          <Avatar />
          <h4>{heading}</h4>
        </div>
        <div className="widgets__right">
          <p> {subtitle}</p>
          <button> + Follow</button>
        </div>
      </div>
    );
  return (
    <div className="widget">
      <div className="widgets__headers">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Zeinab Zalghout",
        "Recruiter|IT Staffing|Currently hiring QA's & Developers for Stratups"
      )}
      {newsArticle(
        "Ali Nehme",
        "FrontEnd developer at Flipkart|Ex-swiggy|Javascript|ReactJs"
      )}
      {newsArticle(
        "Internship/Job For Freshers",
        "Company-Human Ressources"
      )}{" "}
    </div>
  );
}

export default Widgets
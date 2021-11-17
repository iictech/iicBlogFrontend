import React from "react";
import "../HomepageContent.css"
export default function HomePageContent{
  return(
    <div className="container">
      <div className="first-img">
        <img src=""></img>
      </div>
      <div className="content-info">
        <div className="author-name">
          Mayank Verma
        </div>
        <div className="date">
          May,2021
        </div>
        <div className="content-tag">
          Technology
        </div>
      </div>
      <div className="first-content-heading">
          <h2 className="heading"> VR:How it can impact our lives</h2>
              <div className="content-body">
                With every passing day, coders are discovering new ways
                to explore it and newer sectors to apply VR.
                Take a peek to know how you can expect this awesome technology to change your reality you have always seen!
              </div>
          <div className="button">
            <button clasName="btn-text">Continue Reading</button>
          </div>
      </div>
    </div>
  );
}

import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div>
          <div className="container" >
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <p className="mt-4">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Conocenos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

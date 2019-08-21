import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Article extends Component {
  render() {
    const { author, image, content, date, title } = this.props.article;
    return (
      <Fragment>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header"><h4 className="card-title">{title}</h4></div>
          <div className="card-body">
            {this.props.lead ? (
              <img class="card-img-top" src={image} alt="Card image cap" />
            ) : null}
            <p className="card-text">{author}</p>
            <p className="card-text">{date}</p>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Article;

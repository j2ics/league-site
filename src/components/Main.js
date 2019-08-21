import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../assets/img/j2ics-logo-md.png";
import Article from "./Article";

class Main extends Component {
  renderArticles = () => {
    return this.props.articles.slice(1).map((article, index) => {
      return <Article key={index} article={article} lead={false} />;
    });
  };
  render() {
    const { articles } = this.props;
    const leadArticle = articles[0];
    return (
      <Fragment>
        <div>
          <div className="container">
            <div className="row">
              <div className="col col-md-8">
                <Article article={leadArticle} lead={true} />
              </div>
              <div className="col col-md-4">{this.renderArticles()}</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;

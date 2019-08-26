import React, { Component, Fragment } from "react";
import Article from "./Article";
import Leaders from "./Leaders";
import Next from "./Next";
import LoaderHOC from "../LoaderHOC";

class Latest extends Component {
  renderArticles = marker => {
    return Object.values(this.props.articles)
      .reverse()
      .slice(0, 10)
      .map((article, index) => {
        return index % 2 == marker ? (
          <Article key={index} article={article} lead={false} />
        ) : null;
      });
  };
  render() {
    const leadArticle = Object.values(this.props.articles)[
      Object.values(this.props.articles).length - 1
    ];
    return (
      <Fragment>
        <title>Latest News</title>
        <div>
          <div className="container">
            <h2 style={{ paddingBottom: "16px" }}>Latest News</h2>
            <div className="row">
              <div className="col col-md-8">
                {this.renderArticles(0)}
              </div>
              <div className="col col-md-4">
                {this.renderArticles(1)}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoaderHOC(Latest);

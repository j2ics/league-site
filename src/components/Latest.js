import React, { Component, Fragment } from "react";
import Article from "./Article";
import Leaders from "./Leaders";
import Next from "./Next";
import LoaderHOC from "../LoaderHOC";

class Latest extends Component {
  renderArticles = () => {
    return Object.values(this.props.articles)
      .reverse()
      .slice(0, 10)
      .map((article, index) => {
          return <Article key={index} article={article} lead={false} />
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
              <div className="col col-md-12">
                {this.renderArticles()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoaderHOC(Latest);

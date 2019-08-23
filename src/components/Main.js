import React, { Component, Fragment } from "react";
import Article from "./Article";
import Leaders from "./Leaders";
import Next from './Next'
import LoaderHOC from '../LoaderHOC'

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
        <title>Latest News</title>
        <div>
          <div className="container">
            {this.props.main ? null : (
              <h2 style={{ paddingBottom: "16px" }}>Latest News</h2>
            )}
            <div className="row">
              <div className="col col-md-8">
                {this.props.main && (
                  <Leaders leaders={this.props.drivers} />
                )}
                <Article article={leadArticle} lead={true} />
              </div>
              <div className="col col-md-4">
                {this.props.main && (
                  <Next
                    race={
                      this.props.schedule[new Date().getFullYear()][0]
                    }
                  />
                )}
                {this.renderArticles()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoaderHOC(Main);

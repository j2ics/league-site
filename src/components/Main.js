import React, { Component, Fragment } from "react";
import Article from "./Article";
import Leaders from "./Leaders";
import Next from "./Next";
import LoaderHOC from "../LoaderHOC";

class Main extends Component {
  renderArticles = marker => {
    return Object.values(this.props.articles)
      .reverse()
      .slice(1, 3)
      .map((article, index) => {
        return index % marker === 0 ? (
          <Article key={index} article={article} lead={false} />
        ) : null;
      });
  };
  getNextRace = () => {
    let futureRaces = [];
    Object.values(this.props.races[new Date().getFullYear()]).forEach(race => {
      if (new Date(race.date).getTime() > new Date().getTime()) {
        futureRaces.push(race);
      }
    });
    futureRaces.push({location: "No current race scheduled"})
    return futureRaces[0];
  }
  render() {
    const leadArticle = Object.values(this.props.articles)[
      Object.values(this.props.articles).length - 1
    ];
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
                {this.props.main && <Leaders leaders={this.props.drivers} />}
                <Article article={leadArticle} lead={true} />
              </div>
              <div className="col col-md-4">
                {this.props.main && (
                  <Next
                    race={
                      this.props.races !== undefined
                        ? this.getNextRace()
                        : {}
                    }
                  />
                )}
                {this.renderArticles(1)}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoaderHOC(Main);

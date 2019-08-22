import React, { Component, Fragment } from "react";

class Article extends Component {
  render() {
    const { author, image, content, date, title } = this.props.article;
    return (
      <Fragment>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">
            <h4 className="card-title">{title}</h4>
          </div>
          <div className="card-body">
            <img className="card-img-top" src={image} alt="Card cap" />
            {this.props.lead ? (
                <Fragment>
                <p className="card-text">by {author}</p>
                <p className="card-text">{date}</p>
              </Fragment>
            ) : null}

            <p className="card-text">{content}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Article;

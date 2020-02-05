import React, { Component, Fragment } from "react";
import db from "../services/database";
import PrivacyHOC from "./HOC/PrivacyHOC";

class Post extends Component {
  state = {
    title: "",
    author: "",
    image: "",
    content: "",
    date: new Date().toDateString()
  };
  componentDidMount() {
    if (this.props.match.params.key) {
      db.getArticle(this.props.match.params.key).then(article => {
        this.setState({ ...article });
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitArticle(this.state, this.props.match.params.key);
    this.props.onUpdateArticles();
    this.props.history.push("/");
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let { author, title, content, image } = this.state;
    return (
      <Fragment>
        <div className="container">
          <h3>Post new article</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                value={author}
                className="form-control-lg"
                type="text"
                name="author"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                value={image}
                onChange={this.handleChange}
                className="form-control-lg"
                type="text"
                name="image"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={title}
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                type="text-area"
                name="content"
                rows="3"
                value={content}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary">Post Article</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default PrivacyHOC(Post);

Post.defaultProps = {
  article: {}
};

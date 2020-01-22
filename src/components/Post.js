import React, { Component, Fragment } from "react";
import db from "../services/database";

class Post extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.author.value);
    const newPost = {
      title: e.target.title.value,
      author: e.target.author.value,
      image: e.target.image.value,
      content: e.target.content.value,
      date: new Date().toDateString()
    };
    db.postArticle(newPost);
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <h3>Post new article</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input className="form-control-lg" type="text" name="author" />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input className="form-control-lg" type="text" name="image" />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control" type="text" name="title" />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                type="text-area"
                name="content"
                rows="3"
              />
            </div>
            <button className="btn btn-primary">Post Article</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Post;

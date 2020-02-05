import React from "react";
import { Link } from "react-router-dom";

class AdminArticles extends React.Component {
    
renderArticleList = () => {
    const artKeys = Object.keys(this.props.articles)!==undefined
      ? Object.keys(this.props.articles)
      : [];
    return artKeys.reverse().map(key => {
        let thisArticle = this.props.articles[key];
    return<li key={key}><Link to={`/admin/article/edit/${key}`} className="btn">Edit {thisArticle.title}</Link></li>
    })
}

  render() {
      return (
          <>
          <h2>Articles</h2>
          <ul>
            {this.props.articles!==undefined?this.renderArticleList():null}
          </ul>
          </>
      )
  }
}

export default AdminArticles;

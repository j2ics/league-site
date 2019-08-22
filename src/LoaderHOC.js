import React, { Component } from "react";
import Loading from "./components/Loading";

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      if (this.props.articles && this.props.drivers && this.props.schedule) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Loading />;
      }
    }
  };
};

export default LoaderHOC;

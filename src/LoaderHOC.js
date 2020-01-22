import React, { Component } from "react";
import Loading from "./components/Loading";

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    isReady = () => {
      return this.props.articles && this.props.drivers && this.props.schedule;
    };

    render() {
      if (this.isReady()) {
        return <WrappedComponent {...this.props} />;
        // return <Loading />;
      } else {
        return <Loading />;
      }
    }
  };
};

export default LoaderHOC;

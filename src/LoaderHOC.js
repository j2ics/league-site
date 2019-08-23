import React, { Component } from "react";
import Loading from "./components/Loading";
import { isSpreadProperty } from "@babel/types";

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {

isReady = () => {
  return (this.props.articles && this.props.drivers && this.props.schedule)
}

    render() {
      console.log(this.props)
      if (this.isReady()) {
        return <WrappedComponent {...this.props} />;
      } else {
        console.log(this.props)
        return <Loading />;
      }
    }
  };
};

export default LoaderHOC;

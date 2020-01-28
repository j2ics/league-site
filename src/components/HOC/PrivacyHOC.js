import React from "react";
import { Redirect } from "react-router-dom";

const PrivacyHOC = WrappedComponent => {
  return class PrivacyHOC extends React.Component {
    auth = () => {
      this.props.auth();
      return this.props.admin;
    };

    stripLogin = props => {
      const newProps = Object.assign({}, props, { auth: null, admin: null });
      return newProps;
    };

    render() {
      return this.auth() ? (
        <WrappedComponent {...this.stripLogin(this.props)} />
      ) : (
        <Redirect to="/" />
      );
    }
  };
};

export default PrivacyHOC;

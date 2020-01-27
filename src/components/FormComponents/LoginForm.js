import React, { useState } from "react";

export const LoginForm = props => {
  let [password, updatePassword] = useState("");
  const submit = e => {
    e.preventDefault();
    props.onSubmitPassword(password)
  };
  return (
    <form onSubmit={e => submit(e)}>
      <div className="form-group"></div>
      <label htmlFor="pass">Admin Password:</label>
      <input
        type="text"
        value={password}
        onChange={e => updatePassword(e.target.value)}
      />
      <button className="btn btn-warning" type="submit">
        Submit
      </button>
    </form>
  );
};

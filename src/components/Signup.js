import React from "react";

export const Signup = () => (
  <div>
    <div className="mainDiv mx-auto">
      <form className="signup-form">
        <div className="form-group row p-1">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="form-group row p-1">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="mx-auto">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

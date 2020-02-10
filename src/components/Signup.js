import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => (
  <div>
    <div className="text-center mt-5">
      <h1>Log In With Your Gmail account</h1>
    </div>
    <div className="mainDiv mx-auto p-3 mt-5">
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
            <Link to="/feed">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
);

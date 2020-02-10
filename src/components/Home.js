import React from "react";
import { Link } from "react-router-dom";
import "./Home.less";

export const Home = () => (
  <div>
    <div className="card text-center mx-auto">
      <div className="container jumbotron-fluid">
        <h1 className="display-4 mb-5">Jiu Jitsu Moves</h1>
        <p className="lead">
          Sign Up and join the BJJ community by exploring different moves and
          submissions
        </p>
        <Link to="/signup">
          <button type="button" className="btn btn-primary">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  </div>
);

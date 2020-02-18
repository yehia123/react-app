import React from "react";
import { Link } from "react-router-dom";
import "./Home.less";

export const Home = () => (
  <div>
    <div className="text-center mx-auto image-bg">
      <div className="container">
        <h1 className="display-4 mb-5">Jiu Jitsu Wiki</h1>
        <p className="Title">
          Sign Up and join the BJJ community by exploring different moves and
          submissions and checkout the feed of different feedback people
          practicing
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

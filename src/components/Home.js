import React from 'react';
import { Link} from 'react-router-dom';
import './Home.css';

export const Home = () => (
    <div>
      <div className="jumbotron jumbotron-fluid card text-center align-middle">
        <div className="container">
          <h1 className="display-4 mb-5">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <Link to="/signup">
            <button type="button" className="btn btn-primary">Primary</button>
          </Link>
        </div>
      </div>
    </div>
)
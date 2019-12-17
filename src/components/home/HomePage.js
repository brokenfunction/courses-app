import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Courses Admin</h1>
    <p>React/Redux</p>
    <Link to="about" className="bnt btn-warning btn-lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;

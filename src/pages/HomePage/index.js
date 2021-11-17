import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const HomePage = () => {
  return (
    <section className="home-page">
      <h5 className="home-page__title">YouBike</h5>
      <div className="home-page__link">
        <Link to="/find-bikes" className="home-page__link-item">
          <span>找 YouBike</span>
        </Link>
        <Link to="/find-bike-path" className="home-page__link-item">
          <span>找路線</span>
        </Link>
        <Link to="/find-food-and-tour" className="home-page__link-item">
          <span>找美食 / 景點</span>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;

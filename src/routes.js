import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const FindBikePage = React.lazy(() => import('./pages/FindBikePage'));
const FindBikePathPage = React.lazy(() => import('./pages/FindBikePathPage'));
const FindFoodWithTourPage = React.lazy(() => import('./pages/FindFoodWithTourPage'));

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/find-bikes',
    element: <FindBikePage />,
  },
  {
    path: '/find-bike-path',
    element: <FindBikePathPage />,
  },
  {
    path: '/find-food-and-tour',
    element: <FindFoodWithTourPage />,
  },
];

export default routes;

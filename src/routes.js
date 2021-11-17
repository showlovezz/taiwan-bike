import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const FindBikePage = React.lazy(() => import('./pages/FindBikePage'));

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/find-bikes',
    element: <FindBikePage />,
  },
];

export default routes;

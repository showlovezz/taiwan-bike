import React from 'react';
import './assets/scss/app.scss';
import MenuNavbar from './components/MenuNavbar';
import RouterView from './components/RouterView';

const App = () => {
  return (
    <>
      <MenuNavbar />
      <RouterView />
    </>
  );
};

export default App;

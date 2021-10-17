import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const header = (): JSX.Element => (
  <Header
    onAboutClick={() => console.log('about')}
    onLogoClick={() => console.log('logo')}
  />
);

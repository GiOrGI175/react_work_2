import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Section1 from './components/house_section/house';
import Footer from './components/footer/Footer';
import data from './data';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Section1 data={data} />
      <Footer />
    </div>
  );
};

export default App;

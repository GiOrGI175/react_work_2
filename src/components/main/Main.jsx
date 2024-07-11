import React from 'react';
import './main.css';
import img from '/file.webp';

const Main = () => {
  return (
    <main>
      <div className='main_container'>
        <div className='main_content'>
          <h1>DREAM HAUSE</h1>
          <p>Luxury is a pleasure and we give it to you.</p>
          <div className='imgBox'>
            <img src={img} alt='' />
            <p>why us</p>
            <ul>
              <li>we have max confort</li>
              <li>we have all what u went</li>
              <li>Everything you need is here</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

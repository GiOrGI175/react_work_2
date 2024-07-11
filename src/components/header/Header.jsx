import React from 'react';
import './header.css';
import logo from '/logo.webp';

const Header = () => {
  return (
    <header>
      <div className='header_container'>
        <div className='heaedr_contnet'>
          <div className='imgBox'>
            <img src={logo} alt='' />
          </div>
          <nav>
            <ul>
              <li>
                <a href='#'>home</a>
              </li>
              <li>
                <a href='#'>about us</a>
              </li>
              <li>
                <a href='#'>products</a>
              </li>
              <li>
                <a href='#'>contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class='underline_container'>
        <div class='underline'></div>
      </div>
    </header>
  );
};

export default Header;

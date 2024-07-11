import React from 'react';
import './footer.css';
import FooterNav from './footernav';
import Footersocial from './FooterSocial';

const Footer = () => {
  return (
    <footer>
      <div class='underline_container'>
        <div class='underline'></div>
      </div>
      <div className='footer_continer'>
        <div className='foter_content'>
          <FooterNav />
          <Footersocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

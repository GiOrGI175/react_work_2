import React from 'react';

const FooterNav = () => {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date} / ${month} / ${year}`;
  }
  return (
    <div class='ul_box'>
      <ul>
        <li>
          <a href='#'>CONTACT</a>
        </li>
        <li>
          <a href='#'>ABOUT</a>
        </li>
        <li>
          <a href='#'>SUPPORT</a>
        </li>
        <li>
          <a href='#'>JOBS</a>
        </li>
      </ul>
      <span>Data: {getDate()}</span>
    </div>
  );
};

export default FooterNav;

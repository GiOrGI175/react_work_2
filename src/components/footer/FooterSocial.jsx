import React from 'react';
import twitch from '/twitch.svg';
import insta from '/instagram.svg';
import twitt from '/twitter.svg';
import youtube from '/youtube.svg';
import facebook from '/facebook.svg';

const Footersocial = () => {
  return (
    <div class='footer_nav'>
      <ul>
        <li>
          <a href='#'>
            <img src={twitch} alt='twitch' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={insta} alt='instagram' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={twitt} alt='twitter' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={youtube} alt='youtube' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={facebook} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footersocial;

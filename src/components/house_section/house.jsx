import React from 'react';
import './house.css';
import Items from './items.jsx';

const Section1 = (props) => {
  const data = props.data;

  return (
    <section className='section1'>
      <div className='section1_container'>
        <div className='section1_container_content'>
          <h1>DREAM HAUSE</h1>
          <p>Luxury is a pleasure and we give it to you.</p>
          <Items data={data} />
        </div>
      </div>
    </section>
  );
};

export default Section1;

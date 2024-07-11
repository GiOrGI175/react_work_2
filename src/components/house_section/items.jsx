import React from 'react';
import './item.css';

const Items = (props) => {
  console.log(props.data);

  const data = props.data;

  return (
    <div>
      {data.map((item) => {
        const key = `${item.title}-${item.img}-${item.description}`;
        return (
          <div className='items' key={key}>
            <div className='imgBox'>
              <img src={item.img} alt='' />
            </div>
            <div className='descript'>
              <div className='title'>
                <h2>{item.title}</h2>
                <p>Packet: {item.packet}</p>
              </div>
              <p>{item.description}</p>
              <span>A Day ${item.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;

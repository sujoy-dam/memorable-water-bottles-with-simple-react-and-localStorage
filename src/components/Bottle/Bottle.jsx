import React from 'react';
import './Bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name, img, price}=bottle;
    return (
        <div className='bottle'>
            <h3>Botle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : {price}</p>
        </div>
    );
};

export default Bottle;
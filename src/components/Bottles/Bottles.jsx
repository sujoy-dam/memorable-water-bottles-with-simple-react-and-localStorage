import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from '../../utilities/localStorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [selectCart, setSelectCart]= useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    // console.log(bottles)
    useEffect(()=>{
        if(bottles.length>0){
            const storedCartId = getStoredCart();
            console.log(storedCartId)
        }
    },[bottles])


    const handleAddToCart = bottle => {
        console.log(bottle)
        setSelectCart([...selectCart, bottle])
        addToLocalStorage(bottle.id )
    }
    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            <h3>Cart : {selectCart.length}</h3>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        bottle={bottle} 
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;
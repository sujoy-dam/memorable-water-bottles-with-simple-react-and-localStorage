import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

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
            const savedCart = [];
            for(const id of storedCartId){
                const bottle = bottles.find(bottle=>bottle.id === id)
                    if(bottle){
                        savedCart.push(bottle)
                    }
            }
            console.log(savedCart)
            setSelectCart(savedCart)
        }
    },[bottles])


    const handleAddToCart = bottle => {
        console.log(bottle)
        setSelectCart([...selectCart, bottle])
        addToLocalStorage(bottle.id )
    }

    const handleRemoveFromCart = (id)=>{
        const remaining = selectCart.filter(bottle=>bottle.id!==id)
        setSelectCart(remaining)
        removeFromLocalStorage(id)
    }
    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            {/* <h3>Cart : {selectCart.length}</h3> */}
            <Cart selectCart={selectCart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
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
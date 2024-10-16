import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({ selectCart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3>Cart : {selectCart.length}</h3>
            <div className='cart-container'>
                {
                    selectCart.map(cart=><div  key={cart.id}>
                        <img src={cart.img}></img>
                        <button onClick={()=>handleRemoveFromCart(cart.id)}>Remove</button>
                        </div>)
                }
            </div>
        </div>
    );
};
Cart.propTypes = {
    selectCart:PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
}

export default Cart;
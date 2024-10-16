import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({ selectCart }) => {
    return (
        <div>
            <h3>Cart : {selectCart.length}</h3>
            <div className='cart-container'>
                {
                    selectCart.map(cart=><img key={cart.id} src={cart.img}></img>)
                }
            </div>
        </div>
    );
};
Cart.propTypes = {
    selectCart:PropTypes.array.isRequired 
}

export default Cart;
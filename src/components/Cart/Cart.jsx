import './Cart.css'
const Cart = ({ selectCart }) => {
    return (
        <div>
            <h3>Cart : {selectCart.length}</h3>
            <div className='cart-container'>
                {
                    selectCart.map(cart=><img src={cart.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;
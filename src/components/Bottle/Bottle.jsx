import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle)
    const { name, img, price } = bottle;
    return (
        <div className='bottle'>
            <h3>Botle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : {price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes={
    bottle:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired
}

export default Bottle;
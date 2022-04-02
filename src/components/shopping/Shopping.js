import Cart from '../cart/Cart';
import Products from '../products/Products';
import './shopping.css'

const Shopping = () => {
    return (
        <div className='shopping'>
            <Products></Products>
            <Cart></Cart>
        </div>
    );
};

export default Shopping;
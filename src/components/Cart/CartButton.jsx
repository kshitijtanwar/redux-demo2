import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = ({ onClick }) => {
    const numberOfItems = useSelector((state) => state.cartItem.totalQuantity);
    return (
        <button className={classes.button} onClick={onClick}>
            <span>My Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
};

export default CartButton;

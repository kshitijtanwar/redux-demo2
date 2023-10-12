import CartButton from "../Cart/CartButton";
import { cartUiActions } from "../../Store/cart-ui";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";

const MainHeader = (props) => {
    const dispatch = useDispatch();
    const showHideHandler = () => {
        dispatch(cartUiActions.toggle());
    };
    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton onClick={showHideHandler} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;

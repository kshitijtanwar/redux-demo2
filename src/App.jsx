import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./Store/cart-actions";
import cartItems from "./Store/cart-items";


let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.cart.isShown);
    const cart = useSelector((state) => state.cartItem);
    const notification = useSelector((state) => state.cart.notification);

    useEffect(() => {
        if (cartItems.isChanged) {
            dispatch(fetchCartData(cart));
        }
    }, [dispatch]);
    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;

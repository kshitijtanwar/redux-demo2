import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.cart.isShown);
    const cart = useSelector((state) => state.cartItem);
    useEffect(() => {
        fetch(
            "https://redux-cf02c-default-rtdb.firebaseio.com/cart.json?auth=SWV1MU0NIwD6PuwNHUyM77phw0OAgTTnYCeZPzH3",
            {
                method: "PUT",
                body: JSON.stringify(cart),
            }
        );
    }, [cart]);
    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;

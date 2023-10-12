import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "./Store/cart-ui";
import Notification from "./components/UI/Notification";
let isInitial = true;
function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.cart.isShown);
    const cart = useSelector((state) => state.cartItem);
    const notification = useSelector((state) => state.cart.notification);
    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                cartUiActions.showNotification({
                    status: "pending",
                    title: "Pending..",
                    message: "Sending cart data!",
                })
            );
            const response = await fetch(
                "https://redux-cf02c-default-rtdb.firebaseio.com/cart.json?auth=SWV1MU0NIwD6PuwNHUyM77phw0OAgTTnYCeZPzH3",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }
            dispatch(
                cartUiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        };
        if (isInitial) {
            isInitial = false;
            return;
        }
        sendCartData().catch((error) => {
            dispatch(
                cartUiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed",
                })
            );
        });
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

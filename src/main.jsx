import ReactDOM from "react-dom/client";
import store from "./components/Store/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
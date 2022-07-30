import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "react-icons/fi";
import "react-icons/fa";

function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    );
}

export default MyApp;

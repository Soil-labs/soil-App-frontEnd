import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

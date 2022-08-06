import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;

import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";
import RootLayout from "@/layouts/RootLayout";

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </RootLayout>
  );
}


export default MyApp;

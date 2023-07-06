import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";
import Layout from "../layouts/index.js";
import { AuthContextProvider } from "../context/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </Provider >
  );
}

export default MyApp;

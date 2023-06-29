import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";
import Layout from "../layouts/index.js";
import { verifySesion } from "../services/firebase/verifySesion";
import { AuthContextProvider } from "../context/AuthProvider";

function MyApp({ Component, pageProps }) {
  verifySesion()
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </Provider >
  );
}

export default MyApp;

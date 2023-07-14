import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import Layout from "../layouts/index.js";
import { AuthContextProvider } from "../context/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

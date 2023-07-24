import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import Layout from "../layouts/index.js";
import { AuthContextProvider } from "../context/AuthProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maestro ENARM</title>
        <meta name="description" content="Maestro ENAMR es un sitio donde podrás aprender divirtiedote sobre temas de medicina " />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthContextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;

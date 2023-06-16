import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";
import Layout from "../Layout/index.js";
import React, { StrictMode } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Layout>
         <Component {...pageProps} /> 
        </Layout>
    </Provider >
  );
}


export default MyApp;

import Layout from "@/components/Layout/Layout";
import store from "@/store/store";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    store.user.auth();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

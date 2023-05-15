import Layout from "@/components/Layout/Layout";
import store from "@/store/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  store.user.auth();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

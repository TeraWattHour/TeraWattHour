import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/twh.png" />
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-32 px-8 absolute max-w-screen-sm w-full left-1/2 transform -translate-x-1/2">
            <Component {...pageProps} />
            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;

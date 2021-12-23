import { AnimatePresence, motion } from "framer-motion";
import type { Router } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
  router,
}: {
  children: JSX.Element[] | JSX.Element | string;
  router: Router;
}) {
  return (
    <div>
      <Header />
      <motion.main
        key={router.route}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-32"
      >
        {children}
        <Footer />
      </motion.main>
    </div>
  );
}

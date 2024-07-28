import { motion } from "framer-motion";
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <PageNav />
      </motion.div>

      <motion.section
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Simple pricing.
            <br />
            Just $9/month.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Unlock a world of adventure tracking for less than the cost of a
            fancy coffee. Our straightforward pricing gives you full access to
            all features, including unlimited trip logs, interactive maps, and
            photo galleries. No hidden fees, no tiered plans – just one simple
            price for all your travel memory needs.
          </motion.p>
        </motion.div>
        <motion.img
          src="img-2.jpg"
          alt="overview of a large city with skyscrapers"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
      </motion.section>
    </main>
  );
}

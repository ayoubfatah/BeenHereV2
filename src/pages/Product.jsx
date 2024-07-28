import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import { motion } from "framer-motion";
export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <motion.img
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={styles.img}
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className={styles.text}
        >
          <h2>About BeenHere.</h2>
          <p>
            BeenHere is your ultimate travel companion, designed to capture and
            celebrate every step of your global adventures. Our innovative
            platform allows you to effortlessly track and showcase the
            destinations you've explored, turning your travels into a vibrant,
            interactive map of memories.
          </p>
          <p>
            With BeenHere, you can pin your visited locations, upload photos,
            and write journal entries for each trip. Share your experiences with
            friends, discover new destinations through our community features,
            and relive your favorite moments anytime, anywhere. Whether you're a
            casual vacationer or a seasoned globetrotter, BeenHere helps you
            tell your unique travel story in a beautiful, engaging way.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

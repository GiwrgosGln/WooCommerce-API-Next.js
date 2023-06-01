"use client";
import { motion } from "framer-motion";

const Mirrorless = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 bg-black sm:px-10 lg:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-justify text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 text-2xl mx-10 pt-20">
          <h1 className="text-4xl mb-4">Φακοί mirrorless</h1>
          <p className="mb-4">
            Σχεδιασμένες γύρω από την εξαιρετικά ευρεία μοντούρα Z, οι
            φωτογραφικές μηχανές Nikon Z και οι φακοί NIKKOR Z σάς χαρίζουν την
            ελευθερία να δημιουργείτε μοναδικές φωτογραφίες και υπέροχα video.
          </p>
          <button className="px-4 py-2 text-black bg-gradient-to-r from-white to-gray-500 rounded-full">
            Read More
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z96g02OdGHs?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full h-96 rounded-xl shadow-xl shadow-gray-800"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Mirrorless;

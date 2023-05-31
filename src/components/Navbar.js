"use client";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ backgroundColor: "transparent", opacity: 1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4"
    >
      <div className="text-white font-bold text-xl">FrameMasters</div>
      <ul className="flex space-x-16">
        <li className="text-white">DSLR</li>
        <li className="text-white">Compact</li>
        <li className="text-white">Full Frame</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;

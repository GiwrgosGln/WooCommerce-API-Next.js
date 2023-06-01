"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ backgroundColor: "transparent", opacity: 1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4"
    >
      <div className="text-white font-bold text-xl">FrameMasters</div>
      <button className="text-white ml-auto sm:hidden" onClick={toggleMenu}>
        {isMenuOpen ? "Close" : "Menu"}
      </button>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-wrap space-x-16 mt-4 sm:mt-0`}
      >
        <li className="text-white mb-2 sm:mb-0 sm:mr-4">Mirrorless</li>
        <li className="text-white mb-2 sm:mb-0 sm:mr-4">DSLR</li>
        <li className="text-white mb-2 sm:mb-0 sm:mr-4">Φακοί</li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;

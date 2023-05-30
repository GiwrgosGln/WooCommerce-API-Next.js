"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <img
          src="https://res.allmacwallpaper.com/get/iMac-27-inch-wallpapers/Nikon-camera-2560x1440/3804-10.jpg"
          alt="Cover Image with Text"
          className="w-screen h-screen"
        />

        <h1 className="absolute top-1/4 mt-8 ml-20 text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          DSLR Cameras
        </h1>
        <h1 className="absolute w-1/3 top-1/3 mt-8 ml-20 text-xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Inspired by D850, Z series cameras embody the elegance, durability,
          handling and operation of award-winning Nikon DSLRs just in a smaller
          package.
        </h1>
        <button className="absolute top-2/4 ml-20 px-4 py-2 text-black bg-gradient-to-r from-white to-gray-500 rounded-full">
          Read More
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;

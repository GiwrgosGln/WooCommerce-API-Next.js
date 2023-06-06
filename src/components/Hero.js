"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="relative"
      >
        <img
          src="https://wallpapercrafter.com/sizes/3840x2160/248863-dslr-camera-beside-a-long-lens-in-dark-roomcanon-d.jpg"
          alt="Cover Image with Text"
          className="w-screen h-screen sm:hidden lg:block"
        />
        <img
          src="https://w.forfun.com/fetch/a5/a53b11836d7d0691bbe36b95ddf6958b.jpeg"
          alt="Cover Image with Text"
          className="w-full h-screen sm:block lg:hidden sm:w-full"
        />
        <h1 className="absolute top-1/4 mt-8 ml-20 text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 sm:ml-2 2xl:ml-10">
          DSLR Cameras
        </h1>
        <h1 className="absolute top-1/3 mt-8 ml-20 text-xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 sm:w-auto md:w-2/3 lg:w-1/3 sm:ml-2 2xl:w-1/3 2xl:ml-10">
          Inspired by D850, Z series cameras embody the elegance, durability,
          handling and operation of award-winning Nikon DSLRs just in a smaller
          package.
        </h1>
        <button className="absolute top-2/4 ml-20 mt-8 px-4 py-2 text-black bg-gradient-to-r from-white to-gray-500 rounded-full sm:mt-10 sm:ml-2 md:mt-2 lg:mt-2 2xl:mt-0 2xl:ml-10">
          Read More
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";

const Categories = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center py-20 bg-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-3 gap-8 text-center sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex-row justify-center text-white bg-gray-700 py-10 rounded-lg cursor-pointer hover:shadow-xl hover:shadow-gray-600">
          <img
            src="https://www.nikon.gr/globalassets/digizuite/159283-en-z30_front.png/OptimizelyPhonePNG"
            alt="Mirrorless"
            className="h-60 w-full flex justify-center transition-transform duration-300 transform-gpu scale-75 hover:scale-90"
          />
          <h1 className="text-center font-medium text-2xl mt-4">Mirrorless</h1>
        </div>
        <div className="flex-row justify-center text-white bg-gray-700 py-10 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-gray-600">
          <img
            src="https://photocontest-gr.s3.amazonaws.com/ckeditor/pictures/4679/content_0001_464045771594157_set_1.png"
            alt="DSLR"
            className="h-60 w-full flex justify-center transition-transform duration-300 transform-gpu scale-75 hover:scale-90"
          />
          <h1 className="text-center font-medium text-2xl mt-4">DSLR</h1>
        </div>
        <div class="flex-row justify-center text-white bg-gray-700 py-10 rounded-lg cursor-pointer hover:shadow-xl hover:shadow-gray-600">
          <div class="relative overflow-hidden">
            <img
              src="https://pro.sony/s3/2022/08/29132427/FE24_690x500.png"
              alt="Lenses"
              class="h-60 w-96 flex justify-center transition-transform duration-300 transform-gpu scale-75 hover:scale-90"
            />
          </div>
          <h1 class="text-center font-medium text-2xl mt-4">Φακοί</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;

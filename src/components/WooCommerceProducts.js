"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: "http://localhost/woocommerce-api/wordpress",
  consumerKey: "ck_f27f01e18801e25dbda413e4e52a919eefc4b428",
  consumerSecret: "cs_7452cdad8527f8ee2a9d7ee9d7fccf003fa48eea",
  version: "wc/v3",
  queryStringAuth: true,
});

function WooCommerceProducts() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      let page = 1;
      const perPage = 100;
      let fetchedProducts = [];

      try {
        while (true) {
          const response = await WooCommerce.get("products", {
            per_page: perPage,
            page,
          });

          if (response.data.length === 0) {
            // No more products
            break;
          }

          fetchedProducts = [...fetchedProducts, ...response.data];
          page++;
        }
      } catch (error) {
        console.log(error.response.data);
        // Handle the error
      }

      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const addToCart = (productId, productPrice) => {
    console.log(
      `Product ${productId} added to cart with price: ${productPrice}`,
      setTotalPrice(totalPrice + productPrice),
      console.log(totalPrice)
    );
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center bg-black w-full h-full pb-10"
    >
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-product p-4 rounded-lg">
            <div className="flex justify-center items-center">
              {product.images[0] && (
                <img
                  src={product.images[0].src}
                  alt={product.name}
                  className="w-80 mb-4 h-64 transition-transform duration-300 transform-gpu scale-75 hover:scale-90 hover:cursor-pointer"
                />
              )}
            </div>
            <div className="grid grid-cols-1 justify-start">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-200 text-center h-16">
                {product.name}
              </h2>

              <p className="text-gray-200 text-left">Τιμή: {product.price}</p>
              <p className="text-gray-200 text-left font-bold">
                Κατηγορία: {product.categories[0].name}
              </p>
              <button
                onClick={() => addToCart(product.id, product.price)}
                className="bg-gradient-to-r from-gray-400 to-gray-500 rounded-full text-white font-bold py-2 px-4 mt-4 hover:shadow-md hover:shadow-gray-200"
              >
                Προσθήκη στο Καλάθι
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default WooCommerceProducts;

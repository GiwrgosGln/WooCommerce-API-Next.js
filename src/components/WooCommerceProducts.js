"use client";
import React, { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: "http://localhost/wootheme",
  consumerKey: "ck_c63b931dd8442755f2f670a2fdf9cb63884d1aa9",
  consumerSecret: "cs_63e18d619a9ebbb9e68d9c6edecf42c056f4ad5c",
  version: "wc/v3",
  queryStringAuth: true,
});

function WooCommerceProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let page = 1;
      const perPage = 100; // Number of products to fetch per page

      let fetchedProducts = [];

      while (true) {
        try {
          const response = await WooCommerce.get("products", {
            per_page: perPage,
            page,
          });

          if (response.data.length === 0) {
            // No more products to fetch
            break;
          }

          fetchedProducts = [...fetchedProducts, ...response.data];
          page++;
        } catch (error) {
          console.log(error.response.data);
          break;
        }
      }

      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    // Add your logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="flex justify-center py-10 px-10 bg-gradient-to-r from-orange-500 to-purple-500 w-screen h-full">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg">
            <div className="flex justify-center items-center">
              <img
                src={product.images[0].src}
                alt={product.name}
                className="w-80 mb-4 h-72"
              />
            </div>
            <div className="grid grid-cols-1 justify-start">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-800 text-center h-16">
                {product.name}
              </h2>
              <p className="text-gray-600 text-center font-bold">
                Category: {product.categories[0].name}
              </p>
              <p className="text-gray-600 text-center">
                Price: {product.price}
              </p>
              <button
                onClick={() => addToCart(product.id)}
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:bg-gradint-to-r hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WooCommerceProducts;
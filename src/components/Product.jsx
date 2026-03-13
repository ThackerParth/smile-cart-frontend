import React, { useEffect, useState } from "react";

import { Spinner, Typography } from "@bigbinary/neetoui";
import axios from "axios";
import Carousel from "components/Carousel";

const Product = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "https://smile-cart-backend-staging.neetodeployapp.com/products/infinix-inbook-2"
      );
      setProduct(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const discount =
    product.offer_price &&
    (((product.mrp - product.offer_price) / product.mrp) * 100).toFixed(2);

  const imageUrls = product.image_url &&
    product.image_urls && [product.image_url, ...product.image_urls];

  return (
    <div className="px-6 pb-6">
      <div>
        <Typography className="py-2 text-4xl font-semibold" style="h1">
          {product.name}
        </Typography>
        <hr className="border-2 border-black" />
      </div>
      <div className="mt-6 flex gap-4">
        <div className="w-2/5">
          {imageUrls && (
            <Carousel imageUrls={imageUrls} productName={product.name} />
          )}
        </div>
        <div className="w-3/5 space-y-4">
          <Typography>{product.description}</Typography>
          <Typography>MRP: ₹{product.mrp}</Typography>
          {product.offer_price && (
            <Typography className="font-semibold">
              Offer price: ₹{product.offer_price}
            </Typography>
          )}
          {discount && (
            <Typography className="font-semibold text-green-600">
              {discount}% off
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;

import React, { useEffect, useState } from "react";

import { Spinner, Typography } from "@bigbinary/neetoui";
import productsApi from "apis/products";
import Carousel from "components/Carousel";

const Product = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const product = await productsApi.show();
      setProduct(product);
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

  const { name, description, mrp, offerPrice, imageUrls, imageUrl } = product;
  console.log(product);
  const discount = offerPrice && (((mrp - offerPrice) / mrp) * 100).toFixed(2);

  const imageUrlsCombined = imageUrl && imageUrls && [imageUrl, ...imageUrls];

  return (
    <div className="px-6 pb-6">
      <div>
        <Typography className="py-2 text-4xl font-semibold" style="h1">
          {name}
        </Typography>
        <hr className="border-2 border-black" />
      </div>
      <div className="mt-6 flex gap-4">
        <div className="w-2/5">
          {imageUrls && (
            <Carousel imageUrls={imageUrlsCombined} productName={name} />
          )}
        </div>
        <div className="w-3/5 space-y-4">
          <Typography>{description}</Typography>
          <Typography>MRP: ₹{mrp}</Typography>
          {offerPrice && (
            <Typography className="font-semibold">
              Offer price: ₹{offerPrice}
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

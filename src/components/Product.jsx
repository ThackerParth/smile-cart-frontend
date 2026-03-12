import React from "react";

import Carousel from "components/Carousel";
import { IMAGE_URLS } from "components/constants";

const Product = () => {
  const productName = "Infinix INBOOK";
  const productDesc =
    "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year Warranty.";
  const mrp = 395.97;
  const discount = 6;
  const offerPrice = ((mrp * (100 - discount)) / 100).toFixed(2);

  return (
    <div className="px-6 pb-6">
      <div>
        <p className="py-2 text-4xl font-bold"> {productName}</p>
        <hr className="border-2 border-black" />
      </div>
      <div className="mt-6 flex gap-4">
        <div className="w-2/5">
          <Carousel imageUrls={IMAGE_URLS} productName={productName} />
        </div>
        <div className="w-3/5 space-y-4">
          <p>{productDesc}</p>
          <p>MRP: ${mrp}</p>
          <p className="font-semibold">Offer price: ${offerPrice}</p>
          <p className="font-semibold text-green-600">{discount}% off</p>
        </div>
      </div>
    </div>
  );
};
export default Product;

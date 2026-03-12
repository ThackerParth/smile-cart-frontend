import { useState } from "react";

import { Left, Right } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui";
import ImagePicker from "components/ImagePicker";

const Carousel = ({ productName, imageUrls }) => {
  const [index, setIndex] = useState(0);
  const isAtStart = index === 0;
  const isAtEnd = index === imageUrls.length - 1;

  const handleNext = () => {
    if (!isAtEnd) {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (!isAtStart) {
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="flex items-center">
      <Button
        className="shrink-0 focus-within:ring-0 hover:bg-transparent"
        disabled={isAtStart}
        icon={Left}
        style="text"
        onClick={handlePrevious}
      />
      <div className="flex flex-col items-center">
        <div className="relative h-56 w-56 overflow-hidden">
          <div
            className="flex h-56 w-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {imageUrls.map((url, imgIndex) => (
              <img
                alt={productName}
                className="h-56 w-56 flex-shrink-0"
                key={url ?? imgIndex}
                src={url}
              />
            ))}
          </div>
        </div>
        <ImagePicker
          currentIndex={index}
          imageUrls={imageUrls}
          setIndex={setIndex}
        />
      </div>
      <Button
        className="shrink-0 focus-within:ring-0 hover:bg-transparent"
        disabled={isAtEnd}
        icon={Right}
        style="text"
        onClick={handleNext}
      />
    </div>
  );
};

export default Carousel;

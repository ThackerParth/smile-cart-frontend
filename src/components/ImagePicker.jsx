import React from "react";

import classNames from "classnames";

const MAX_VISIBLE = 5;

const ImagePicker = ({ imageUrls, currentIndex, setIndex }) => {
  const total = imageUrls.length;

  if (total === 0) return null;

  let windowStart = 0;
  let windowEnd = total - 1;

  if (total > MAX_VISIBLE) {
    if (currentIndex <= 2) {
      windowStart = 0;
    } else if (currentIndex >= total - 3) {
      windowStart = total - MAX_VISIBLE;
    } else {
      windowStart = currentIndex - 2;
    }
    windowEnd = windowStart + MAX_VISIBLE - 1;
  }

  const hasLeftMore = windowStart > 0;
  const hasRightMore = windowEnd < total - 1;

  const mainIndices = [];
  for (let i = windowStart; i <= windowEnd; i += 1) {
    mainIndices.push(i);
  }

  return (
    <div className="m-3 flex flex-row items-center space-x-1">
      {hasLeftMore && (
        <span
          aria-hidden="true"
          className="neeto-ui-rounded-full h-2 w-2"
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "black",
            opacity: 0.4,
          }}
        />
      )}
      {mainIndices.map(index => (
        <button
          key={index}
          type="button"
          className={classNames(
            "neeto-ui-rounded-full h-3 w-3 cursor-pointer appearance-none bg-transparent p-0",
            { "neeto-ui-bg-black": index === currentIndex }
          )}
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "black",
          }}
          onClick={() => setIndex(index)}
        />
      ))}
      {hasRightMore && (
        <span
          aria-hidden="true"
          className="neeto-ui-rounded-full h-2 w-2"
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "black",
            opacity: 0.4,
          }}
        />
      )}
    </div>
  );
};

export default ImagePicker;

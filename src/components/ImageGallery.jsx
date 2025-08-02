import React from "react";
import { getImageUrl } from "../cloudinary/cloudinaryService";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={getImageUrl(img.public_id, { width: 300, crop: "fill" })}
          alt="Uploaded"
          className="rounded shadow"
        />
      ))}
    </div>
  );
};

export default ImageGallery;

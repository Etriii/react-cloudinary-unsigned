import React from "react";
import { getImageUrl } from "../cloudinary/cloudinaryService";
import DeleteImage from "./DeleteImage"

const ImageGallery = ({ images, setImages }) => {
  if (!images) return;

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {images.map((img, i) => (
        <div key={i}>
          <img
            src={getImageUrl(img.public_id, { width: 300, crop: "fill" })}
            alt="Uploaded"
            className="rounded shadow"
          />
          <DeleteImage public_id={img.public_id} setImages={setImages} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

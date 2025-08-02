import React, { useState } from "react";
import { uploadImage } from "../cloudinary/cloudinaryService";

const ImageUploader = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const result = await uploadImage(file, "yes");
      onUpload(result); 
    } catch (err) {
      alert("Failed to upload: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <input type="file" onChange={handleChange} />
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default ImageUploader;

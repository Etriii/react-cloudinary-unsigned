import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [images, setImages] = useState([]);

  const handleUpload = (img) => {
    setImages((prev) => [...prev, img]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh", 
        padding: "1.5rem",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Image Uploader
      </h1>
      <ImageUploader onUpload={handleUpload} />
      <ImageGallery images={images} />
    </div>

  );
}

export default App;

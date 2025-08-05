const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

// ⚠️ WARNING: Storing API secrets in frontend code is NOT secure.
// This is for demo/testing purposes only.
const API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;

export const uploadImage = async (file, folder = "upload") => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", folder);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return await response.json(); // secure_url, public_id, etc.
};

export const getImageUrl = (publicId, options = {}) => {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

  const transforms = [];
  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.crop) transforms.push(`c_${options.crop}`);

  const transformString = transforms.length > 0 ? `/${transforms.join(",")}` : "";

  return `${base}${transformString}/${publicId}`;
};


// ⚠️ Insecure delete for demo purposes
export const deleteImage = async (publicId) => {
  const timestamp = Math.floor(Date.now() / 1000);

  // Cloudinary requires a signature for deletion
  const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`;

  // Create SHA1 hash
  const signature = await crypto.subtle.digest(
    "SHA-1",
    new TextEncoder().encode(stringToSign)
  ).then(buf => Array.from(new Uint8Array(buf))
    .map(x => x.toString(16).padStart(2, "0"))
    .join("")
  );

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`;

  const formData = new FormData();
  formData.append("public_id", publicId);
  formData.append("signature", signature);
  formData.append("api_key", API_KEY);
  formData.append("timestamp", timestamp);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Delete failed");
  }
  
  return await response.json();
};
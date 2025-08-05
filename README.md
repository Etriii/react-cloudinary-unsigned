# 📦 React Cloudinary (Unsigned)

---

## 🚀 Features

- ✅ Upload images to Cloudinary (unsigned preset)
- ✅ Dynamic folder support (e.g., `org/foldername`)
- ✅ Preview uploaded images
- ✅ Lightweight: No external dependencies like Axios
- ✅ Secure by design (no secret key exposed)


## 🛠️ Setup & Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/react-cloudinary-unsigned-upload.git
cd react-cloudinary-unsigned-upload
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env file**
Create a .env file in the root of your project with the following:
```bash
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_preset
```
Make sure:
- The preset is unsigned
- The preset has the correct folder (e.g., org/foldername) set in Cloudinary

4. **Run the app**
```bash
npm run dev
```


## 🔒 Security Notes

Even though this project uses **unsigned uploads** (no secret keys), some best practices are still important.

✅ **Upload Presets**: Ensure your Cloudinary upload preset has:

- `unsigned: true`
- `overwrite: false`
- `use_filename: false`
- `unique_filename: true`
- A specific folder (e.g., `org/user_uploads`) to scope uploads

✅ **Avoid exposing signed presets or secrets.**

✅ **Set proper upload size limits** in Cloudinary's dashboard.

⚠️ **Unsigned uploads can be abused** if the preset is public and guessed. You can:

- Limit upload types to images only
- Use signed uploads for sensitive apps
- Rate-limit or throttle client-side uploads if needed


## ⚠️ Security Warning
The `deleteImage` function in this project is **not secure** because it exposes the Cloudinary API secret in frontend code.  
Anyone with access to your site could use it to delete any of your assets.  
Use this only for local demos, project requirements, or internal tools.  
For production, always move deletion logic to a secure backend.
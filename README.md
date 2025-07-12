# Photo Upload Gallery

This is a simple Node.js project that lets people upload photos and shows them in a basic gallery.
It uses Express and Multer to handle uploads.

---

## Features

- Upload images with an HTML form
- Stores uploaded images in the public/uploads/ folder
- Displays all uploaded images in a simple gallery
- Basic styling with style.css

---

## Project Structure

photo-gallery/
 ├── public/
 │   ├── uploads/      --> Uploaded images go here
 │   └── style.css     --> CSS for styling
 ├── server.js         --> Main server file
 ├── .gitignore        --> Ignore node_modules
 ├── package.json      --> Project config
 ├── package-lock.json --> Lock file (auto-generated)
 └── README.md         --> This file

---

## Requirements

- Node.js installed
- npm (comes with Node)

---

## How to Run

1. Clone the repository or download the folder.

2. Open a terminal in the project folder.

3. Install dependencies:
   npm install

4. Start the server:
   node server.js

5. Open your browser:
   http://localhost:3000

---

## How to Use

1. Click "Choose File" and pick an image.
2. Click "Upload".
3. The photo is saved in public/uploads/ and shows up in the gallery below.

---

## Notes

- Right now any file type can be uploaded. For production, add checks to accept only image files.
- Files are stored on disk. For bigger projects, use cloud storage or a database.

---

## License

This project is open source — feel free to use and improve it!

---

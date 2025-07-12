console.log("Test: server.js is starting!");

const express = require('express');
const multer  = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Where uploaded images go
const upload = multer({ dest: 'public/uploads/' });

// Serve static files (uploads, CSS)
app.use(express.static('public'));

// GET: Home page
app.get('/', (req, res) => {
  const uploadsDir = path.join(__dirname, 'public/uploads');
  const files = fs.readdirSync(uploadsDir);
  const images = files.map(file => `<img src="/uploads/${file}" style="width:200px;margin:10px;">`);
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Photo Gallery</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Upload a Photo</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
          <input type="file" name="image" accept="image/*" required>
          <button type="submit">Upload</button>
        </form>
        <h2>Gallery</h2>
        <div class="gallery">${images.join('')}</div>
      </body>
    </html>
  `;
  res.send(html);
});

// POST: Upload photo
app.post('/upload', upload.single('image'), (req, res) => {
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
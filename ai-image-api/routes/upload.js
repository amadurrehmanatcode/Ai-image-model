const express = require("express");
const upload = require("../middlewares/upload");
const { processImage } = require("../controllers/imageProcessor");

const router = express.Router();

// Image Upload Route
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log("🔍 Request File:", req.file); // Debugging
    if (!req.file) {
      return res.status(400).json({ error: "❌ No file uploaded!" });
    }

    // Process Image with AI
    const objects = await processImage(req.file.path);

    res.json({
      image: req.file.filename,
      objects: objects,
    });
  } catch (error) {
    res.status(500).json({ error: "❌ Error processing image" });
  }
});

module.exports = router;

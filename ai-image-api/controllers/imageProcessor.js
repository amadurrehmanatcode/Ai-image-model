const vision = require("@google-cloud/vision");

console.log(
  "🔍 Using Google Vision API with key:",
  process.env.GOOGLE_APPLICATION_CREDENTIALS
);

const client = new vision.ImageAnnotatorClient();

async function processImage(imagePath) {
  try {
    console.log("📂 Processing Image Path:", imagePath); // Debugging

    const [result] = await client.labelDetection(imagePath);
    console.log("✅ Google Vision API Result:", result); // Debugging

    const labels = result.labelAnnotations.map((label) => ({
      label: label.description,
      confidence: Math.round(label.score * 100),
    }));

    return labels;
  } catch (error) {
    console.error("❌ Google Vision API Error:", error); // Debugging
    throw new Error("❌ Error processing image");
  }
}

module.exports = { processImage };

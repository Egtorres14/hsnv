const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(800, 600, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    // Create a smaller version for thumbnails
    await sharp(inputPath)
      .resize(400, 300, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 60 })
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '-thumb.webp'));

  } catch (error) {
    console.error(`Error processing ${path.basename(inputPath)}:`, error);
  }
};

const processDirectory = async () => {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Get all image files
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to process`);

    // Process each image
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      
      console.log(`Processing: ${file}`);
      await optimizeImage(inputPath, outputPath);
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error processing directory:', error);
  }
};

processDirectory();
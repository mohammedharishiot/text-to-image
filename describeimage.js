const vision = require('@google-cloud/vision');
const fs = require('fs');

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'path-to-your-service-account-key.json' // Path to your service account key file
});

// Function to describe the image
async function describeImage(imagePath) {
    try {
        const [result] = await client.labelDetection(imagePath);
        const labels = result.labelAnnotations;

        console.log('Image Description:\n');
        labels.forEach(label => {
            console.log(label.description);
        });
    } catch (error) {
        console.error('Error describing the image:', error);
    }
}

// Run the description on your image file
const imagePath = 'flower.jpg'; // Update with your actual image file path
describeImage(imagePath);

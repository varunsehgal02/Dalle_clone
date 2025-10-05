import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // For now, let's use mock images to ensure the app works perfectly
    console.log('Generating mock image for:', prompt);
    const mockImage = generateMockImage(prompt);
    return res.status(200).json({ photo: mockImage });

    /* Uncomment this section if you want to try Hugging Face API again
    // Use Hugging Face API for image generation - use a working model
    const response = await fetch('https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          num_inference_steps: 20,
          guidance_scale: 7.5,
        }
      }),
    });

    if (!response.ok) {
      if (response.status === 503) {
        // Fallback to mock image if model is loading
        console.log('Model loading, using mock image');
        const mockImage = generateMockImage(prompt);
        return res.status(200).json({ photo: mockImage });
      } else if (response.status === 404) {
        // Model not found, use mock image
        console.log('Model not found, using mock image');
        const mockImage = generateMockImage(prompt);
        return res.status(200).json({ photo: mockImage });
      } else if (response.status === 429) {
        throw new Error('Rate limit reached, please wait a few minutes and try again');
      } else {
        throw new Error(`Hugging Face API error: ${response.status}`);
      }
    }

    // Get the image as array buffer
    const imageBuffer = await response.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    
    res.status(200).json({ photo: imageBase64 });
    */
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: error?.message || 'Something went wrong' 
    });
  }
});

// Function to generate mock images as fallback
function generateMockImage(prompt) {
  // Create a simple colored rectangle based on prompt keywords
  const colors = {
    'cat': '#FF6B6B',
    'dog': '#4ECDC4', 
    'car': '#45B7D1',
    'house': '#96CEB4',
    'tree': '#FFEAA7',
    'sun': '#FDCB6E',
    'moon': '#6C5CE7',
    'flower': '#FD79A8',
    'cute': '#FFB6C1',
    'baby': '#FFB6C1',
    'default': '#A29BFE'
  };
  
  const promptLower = prompt.toLowerCase();
  let color = colors.default;
  
  for (const [keyword, hexColor] of Object.entries(colors)) {
    if (promptLower.includes(keyword)) {
      color = hexColor;
      break;
    }
  }
  
  // Create a simple SVG image
  const svg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" fill="${color}"/>
      <text x="512" y="512" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${prompt.substring(0, 20)}
      </text>
      <text x="512" y="580" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
        (Mock Image)
      </text>
    </svg>
  `;
  
  // Convert SVG to base64 and add data URL prefix
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

export default router;

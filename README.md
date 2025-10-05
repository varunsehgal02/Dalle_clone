# 🎨 DALL-E Clone - AI Image Generation App

A full-stack MERN application that generates AI images using text prompts, similar to DALL-E. Built with React, Node.js, Express, MongoDB, and Tailwind CSS.

![DALL-E Clone](https://i.ibb.co/p0f27C2/Thumbnail-9.png)

## ✨ Features

- 🎨 **AI Image Generation**: Generate images from text prompts
- 🖼️ **Image Gallery**: Browse and search through community-generated images
- 💾 **Image Storage**: Save and share generated images
- 🔍 **Search Functionality**: Find images by name or prompt
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎯 **Mock Image System**: Fallback system for testing without API costs
- 🚀 **Real-time Updates**: Instant image generation and display

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Router** - Client-side routing
- **File-saver** - Download functionality

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Cloudinary** - Image storage and management

### AI Services
- **Hugging Face API** - AI image generation (Stable Diffusion)
- **Mock Image System** - Fallback for testing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/varunsehgal02/dalle-clone.git
   cd dalle-clone
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Environment Setup

1. **Create environment file**
   ```bash
   cd server
   touch .env
   ```

2. **Add environment variables to `server/.env`**
   ```env
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/dalle-clone?retryWrites=true&w=majority
   HUGGINGFACE_API_KEY=hf_your-huggingface-token-here
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

### API Keys Setup

#### MongoDB Atlas (Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Create a database user
4. Get your connection string

#### Hugging Face (AI Images) - Optional
1. Go to [Hugging Face](https://huggingface.co/)
2. Sign up for free account
3. Go to Settings → Access Tokens
4. Create new token with "Read" permissions

#### Cloudinary (Image Storage)
1. Go to [Cloudinary](https://cloudinary.com/)
2. Create free account
3. Get your credentials from dashboard

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   Server will start on `http://localhost:8080`

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   Frontend will start on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Usage

### Generating Images

1. **Navigate to Create page**
   - Click "Create" button in header
   - Or go to `/create-post`

2. **Enter details**
   - **Your Name**: Enter your name
   - **Prompt**: Describe the image you want (e.g., "a cute cat")

3. **Generate image**
   - Click "Generate" button
   - Wait for image to appear (mock images are instant)

4. **Share with community**
   - Click "Share with the Community"
   - Image will be saved to database

### Browsing Images

1. **Go to Home page**
   - Navigate to `/` (main page)

2. **Search images**
   - Use search bar to find images by name or prompt
   - Real-time search as you type

3. **Download images**
   - Hover over any image
   - Click download button

## 🎨 Mock Image System

The app includes a built-in mock image system that generates colorful placeholder images based on your prompts:

- **"cat"** → Red background
- **"dog"** → Teal background
- **"baby"** → Pink background
- **"car"** → Blue background
- **"house"** → Green background
- **"tree"** → Yellow background
- **Any other prompt** → Purple background

## 🔧 Configuration

### Switching to Real AI Images

To use Hugging Face API instead of mock images:

1. **Uncomment the API code** in `server/routes/dalleRoutes.js`
2. **Comment out the mock image code**
3. **Add your Hugging Face API key** to `.env`

### Customizing Mock Images

Edit the `generateMockImage` function in `server/routes/dalleRoutes.js` to:
- Add new color keywords
- Change image dimensions
- Modify text styling

## 📁 Project Structure

```
dalle-clone/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── page/          # Main pages (Home, CreatePost)
│   │   ├── assets/        # Images and icons
│   │   ├── utils/         # Utility functions
│   │   └── constant/      # Constants and data
│   ├── package.json
│   └── vite.config.js
├── server/                 # Backend Node.js app
│   ├── routes/            # API routes
│   ├── mongodb/           # Database models and connection
│   ├── .env              # Environment variables
│   └── package.json
└── README.md
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service

### Backend (Railway/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the `server` folder
3. Update frontend API URLs to point to your deployed backend

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for DALL-E inspiration
- [Hugging Face](https://huggingface.co/) for AI models
- [Stability AI](https://stability.ai/) for Stable Diffusion
- [Tailwind CSS](https://tailwindcss.com/) for styling framework

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](https://github.com/varunsehgal02/dalle-clone/issues) page
2. Create a new issue with detailed description
3. Contact: varun.sehgal02@gmail.com

## 🎯 Roadmap

- [ ] Real-time collaboration
- [ ] Image editing features
- [ ] Multiple AI model support
- [ ] User authentication
- [ ] Image categories and tags
- [ ] Advanced search filters

---

**Made with ❤️ by Varun Sehgal**

⭐ **Star this repository if you found it helpful!**


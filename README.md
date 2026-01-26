🍔 Foodie-Reels

Foodie-Reels is a MERN stack (MongoDB, Express, React, Node.js) social platform where users can watch, like, and share short food videos, similar to Instagram Reels or TikTok, but focused on food content.

🌟 Features

User Authentication: Sign up / Login with JWT token-based authentication.

Browse Videos: Scroll through short food videos with auto-play.

Like / Unlike Videos: Users can like or unlike videos in real-time.

Save Videos: Option to save favorite videos for later viewing.

Responsive Design: Works seamlessly on desktop and mobile.

Profile Management: Users can view their profile, uploaded videos, and activity.

Video Upload (Admin): Admins or users can upload new food videos (optional).




🛠 Tech Stack
Layer	Technology
Frontend	React.js, CSS, HTML
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
Authentication	JWT, Cookies
Video Hosting	ImageKit (or any CDN)
HTTP Client	Axios


foodie-reels/
│
├─ backend/                  # Node.js + Express API
│  ├─ controllers/           # Controllers for Food, User, Auth
│  ├─ models/                # Mongoose schemas
│  ├─ routes/                # API routes
│  ├─ middlewares/           # Auth and error handling middleware
│  └─ server.js              # Backend server entry
│
├─ frontend/                 # React client
│  ├─ src/
│  │  ├─ components/         # Reusable UI components
│  │  ├─ pages/              # Home, Profile, Login, Signup
│  │  ├─ styles/             # CSS files
│  │  └─ App.jsx             # React app entry
│
├─ package.json              # Project dependencies
└─ README.md                 # Project documentation

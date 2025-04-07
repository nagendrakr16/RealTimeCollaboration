# Real Time Collaboration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), extended into a real-time collaborative text editor using **React**, **Express**, **MongoDB**, and **Socket.IO**.

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the frontend React app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `cd backend && npm start`

Runs the backend Express server with WebSocket (Socket.IO) support on [http://localhost:5000](http://localhost:5000).\
Ensure MongoDB is running and `.env` is properly configured with your MongoDB URI.

### `npm run build`

Builds the frontend app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.\
This is currently unused but can be extended for future unit/integration tests.

## ⚙️ How It Works

- 🧠 Editor powered by [React Quill](https://github.com/zenoamaro/react-quill)
- 🔄 Real-time collaboration via [Socket.IO](https://socket.io/)
- 💾 Documents auto-save to MongoDB every few seconds
- 🔗 Each session uses a unique document ID (generated via `uuid`)

## 🧪 Tech Stack

- **Frontend:** React, React-Quill, Socket.IO Client
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO Server
- **Database:** MongoDB (local or MongoDB Atlas)

## 🌐 Deployment

This app can be deployed as two separate services:

1. **Frontend (React App):**
   - Can be deployed to Vercel, Netlify, or any static hosting service.
2. **Backend (Express + MongoDB):**
   - Deploy on Heroku, Render, Railway, or self-hosted with Docker.

Make sure to set your `.env` with the following:

MONGO_URI=your_mongodb_uri PORT=5000


## 🧠 Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Docs](https://create-react-app.dev/)
- [React Quill Docs](https://github.com/zenoamaro/react-quill)
- [Socket.IO Docs](https://socket.io/docs/)
- [Mongoose Docs](https://mongoosejs.com/)

## 🤝 Contributions

Feel free to fork, submit PRs, or create issues to improve the project.

---


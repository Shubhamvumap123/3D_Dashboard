<div align="center">

# 🌌 3D Job Tracker Dashboard 

<img src="https://readme-typing-svg.herokuapp.com?font=Outfit&weight=600&size=30&pause=1000&color=3B82F6&center=true&vCenter=true&width=800&lines=Welcome+to+the+Future+of+Job+Tracking;Immersive+3D+SaaS+Analytics;Powered+by+MERN+%2B+React+Three+Fiber" alt="Typing SVG" />

<p align="center">
  <!-- Dynamic 3D Animated Representation -->
  <img src="https://media.giphy.com/media/ZVik7pBtu9dNsT11GE/giphy.gif" width="400" alt="3D Animated Node Sphere" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"/>
</p>

A next-generation premium Job Tracking application with a **monolithic client/server architecture**, built on the **MERN** stack and enhanced with **React Three Fiber** for an unforgettable immersive 3D experience.

[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Render-white?style=for-the-badge&logo=three.js&logoColor=black)](https://threejs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ Features 

*   **🌐 Immersive 3D Engine:** An interactive WebGL/Three.js particle background that responds to mouse velocity and user inputs for a futuristic feel.
*   **📊 Dynamic SaaS Analytics:** Beautifully customized Recharts components rendering metrics, application success rates, and tracking history dynamically.
*   **🔐 Secure & Robust Backend:** Express RESTful API with JSON Web Token (JWT) role-based authentication and Bcrypt password hashing.
*   **💼 Complete User & Job CRUD:** Create, Read, Update, and Delete capabilities for managing comprehensive job hunting records directly to MongoDB.
*   **🎨 Premium UI/UX:** High-end aesthetic using Glassmorphism design constraints, deep dark modes, and flawless Framer Motion micro-animations.

---

## ⚙️ How It Works (Architecture)

The application functions dynamically as a split Client/Server monolith running concurrently in development:

<details>
<summary><b>1. The 3D Client Layer (Vite + React)</b></summary>
<br>
The frontend sits on Vite for rapid HMR. It implements a global State machine that feeds data to both standard HTML DOM overlays and the WebGL Canvas. 

*   **React Three Fiber (`@react-three/fiber`)** handles the 3D particle nodes representing "Network Activity".
*   Framer Motion orchestrates the entrance and exit of Glassmorphism UI widgets over the 3D layer.
*   Axios handles asynchronous data fetching from the backend API, seamlessly updating the Recharts analytics widgets.
</details>

<details>
<summary><b>2. The API Server Layer (Node + Express)</b></summary>
<br>
The backend handles business logic and persistent data storage.

*   Endpoints map securely to specific `Controllers` (e.g., `userController`, `jobController`).
*   Middleware verifies token authenticity against the `JWT_SECRET` prior to resolving any restricted GET/POST queries.
*   Mongoose schemas map relationships between User Accounts and their respective Array of Job Applications.
</details>

---

## 🚀 Getting Started

Follow these steps to get your 3D Dashboard running locally!

### 1. Requirements
*   **Node.js** (v18.0.0 or higher)
*   **MongoDB** (Local instance or Atlas URI)

### 2. Installation
Clone the project, then install dependencies for **both** folders:

```bash
# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install
```

### 3. Environment Variables
Create a `.env` file in the **`server`** directory containing your specific secrets:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/job-tracker
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
```

*(Note: The Client Vite application will run on port `5173` by default and route proxy requests to port `5000`)*.

### 4. Running the Application 

To launch the immersive environment and backend API concurrently, open two terminal windows (or use concurrently):

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
# Expected Output: "Server running on port 5000" and "Connected to MongoDB"
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
# Expected Output: "VITE ready in xxx ms" -> Navigate to http://localhost:5173
```

---

<div align="center">
  <h3>Ready to conquer the job hunt?</h3>
  <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" width="100%" alt="Tech Divider" style="height: 10px; object-fit: cover; border-radius: 5px;"/>
  <br><br>
  <i>Designed with React Three Fiber & MERN Architecture</i>
</div>

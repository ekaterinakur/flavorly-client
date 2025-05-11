# 🍽️ Recipe App

[Live page on Vercel](https://flavorly-client.vercel.app/)

A full-featured recipe-sharing platform built with React, Redux Toolkit, React Router, and Node.js. Users can browse, add, favorite, and manage recipes — with support for user profiles, pagination, lazy loading, and private routing.

---

## Features

- Authentication & private routes
- User profiles (own recipes, favorites, followers)
- Paginated recipe lists
- Favorite/unfavorite recipes
- Add & delete your own recipes
- Lazy-loaded routes for performance
- Beautiful responsive layout with fallback loaders

---

## Tech Stack

- **Frontend:**
  - React
  - Redux Toolkit
  - React Router 6
  - React Hot Toast
  - Sass Modules
  - Axios

- **Backend ([Repo](https://github.com/DelrikCh/flavorly-api)):**
  - Node.js / Express
  - Sequelize ORM
  - PostgreSQL

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
```

2. **Install dependencies:**
```bash
npm ci
```

3. **Set environment variables:**
Create a .env file and add:
```VITE_API_URL=http://localhost:3000/api```

4. **Start the development server:**
```bash
npm run dev
```
---

## Scripts
```npm run dev```	Start Vite dev server   
```npm run build```	Build for production   
```npm run lint```	Run ESLint   
```npm run preview```	Preview production build   

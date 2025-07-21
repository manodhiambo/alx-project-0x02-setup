# SoloForge: Mastering Project Autonomy

A comprehensive Next.js project designed to help you master modern frontend development by building a scalable, maintainable, and fully responsive web application using **Next.js**, **TypeScript**, and **Tailwind CSS**.

## 📌 Project Overview

This project serves as a guided path for beginners to gain hands-on experience with building a full-featured web app. You’ll cover core topics including routing, reusable components, API integration, and code organization.

## 🎯 Objectives

By completing this project, you will:

- Scaffold and configure a modern **Next.js** app with **TypeScript** and **Tailwind CSS**
- Understand the Pages Router in Next.js for navigation
- Create modular, reusable UI components using TypeScript interfaces
- Build interactive UI elements like modals, cards, and buttons
- Integrate with external APIs (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) for dynamic content
- Apply best practices for project structure and code quality
- Implement responsive designs with Tailwind CSS utility classes

---

## 🧠 Learning Objectives

- ✅ Understand Next.js application structure
- ✅ Use TypeScript for static typing and prop validation
- ✅ Build components following the Single Responsibility Principle (SRP)
- ✅ Implement basic and dynamic routing
- ✅ Use `useState` and `useEffect` for state and data handling
- ✅ Perform API requests and display results
- ✅ Maintain a clean and scalable folder structure
- ✅ Enforce linting and consistent coding style

---

## 🛠 Requirements

Make sure your environment includes:

- Node.js `v16` or later
- `npm` or `yarn`
- Git & GitHub
- Code editor (VS Code recommended)
- Basic knowledge of React, HTML, CSS, and TypeScript

---

## 🏗️ Project Structure

# 📁 Project Structure

```bash
alx-project-0x02-setup/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json

# 🚀 ALX Project 0x02 Setup

## ⚙️ Setup Instructions

### Clone the repository

```bash
git clone https://github.com/your-username/alx-project-0x02-setup.git
cd alx-project-0x02-setup

## 📦 Install Dependencies

npm install
# or
yarn install

# 🚀 Run the Development Server

npm run dev
# or
yarn dev

Then open your browser and navigate to:
http://localhost:3000

## 🧩 Features

- ⚡ **Fast Routing** – Client-side navigation using Next.js Pages Router  
- 🧱 **Component Library** – Reusable UI components (Buttons, Cards, Modals)  
- 🧑‍💻 **API Integration** – Fetch data from JSONPlaceholder  
- 📱 **Responsive UI** – Mobile-first design with Tailwind  
- 📦 **Type-Safe Code** – All components typed using interfaces  
- 🚀 **Optimized Build** – Automatic code splitting and performance optimizations  

---

## ✅ Best Practices Followed

### 📁 Project Organization

- Components grouped by domain: `common/`, `layout/`
- Interfaces centralized in: `interfaces/`
- Pages mapped to URL routes via the `pages/` directory

### 🧩 Component Design

- Follows the **Single Responsibility Principle (SRP)**
- Reusable components with type-safe props
- Presentational and container components separated when appropriate

### 🧹 Code Quality

- ESLint enabled via `.eslintrc.json`
- Consistent formatting and meaningful comments
- Clear, semantic commit messages

### 🚀 Performance

- Lazy loading implemented where needed
- Efficient usage of Tailwind classes
- Optimized external API calls

---

## 📡 API Integration

Using [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to fetch:

- **Posts**: `/posts`
- **Users**: `/users`

### Example using `useEffect` hook in TypeScript:

```ts
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data));
}, []);

## 🧪 Testing & Validation

- ✅ Test components in isolation  
- ✅ Test route navigation  
- ✅ Validate props and types in each component  
- ✅ Ensure responsiveness across screen sizes  

---

## 📘 Documentation

- All components include prop types in `interfaces/index.ts`
- Code includes comments for complex logic or API usage
- README explains setup, structure, and development expectations

---

## 📝 Commit Guidelines

Use clear, descriptive commit messages such as:

```bash
feat: add reusable Button component
fix: correct fetch URL for posts
refactor: move interfaces to centralized folder

## 🙋 Manual Review Checklist

- ✅ All required components exist and are typed  
- ✅ Data is fetched and displayed correctly  
- ✅ All pages are accessible through routing  
- ✅ Linting passes with no major warnings  
- ✅ README is complete and clear  

---

## 🚀 Final Deliverables

A fully functional, modern web application built using:

- ✅ **Next.js**  
- ✅ **TypeScript**  
- ✅ **Tailwind CSS**  
- ✅ **JSONPlaceholder API**  

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

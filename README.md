# 🎓 Student Management System (React + Redux Toolkit)

A fast, responsive CRUD application built with **React**, **Redux Toolkit (RTK)**, and **Tailwind CSS**. This project demonstrates clean global state management, seamless component modularity, and real-time state synchronization without prop-drilling.

---

## ✨ Features

- ➕ **Add New Students:** Easily add student records with Roll Number, Name, and Course/Branch.
- ✏️ **Inline / Form Editing:** Toggle seamlessly between **Add Mode** and **Edit Mode** with automatic form pre-filling.
- 🗑️ **Delete Student Records:** Remove student entries instantly from global state.
- 🎨 **Modern UI/UX:** Clean, accessible tabular structure styled with Tailwind CSS.
- 🧠 **Centralized Global State:** Powered by Redux Toolkit for clean action dispatching and zero prop-drilling.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`), React-Redux
- **Styling:** Tailwind CSS
- **Icons & Typography:** Inter Font & Emoji Accents

---

## 📂 Project Architecture

```text
src/
├── app/
│   └── store.js              # Central Redux Store configuration
├── features/
│   ├── studentSlice.js       # RTK Slice (State, Reducers, Actions)
│   ├── StudentList.jsx       # Table container & list layout
│   └── StudentForm.jsx       # Controlled form (Handles Add & Edit)
├── components/
│   └── Students.jsx          # Individual Table Row Component
├── App.jsx                   # Main layout container
└── main.jsx                  # Entry point with Redux Provider
```

---

## 💻 How to Clone and Run Locally

Follow these quick steps to get the project running on your local machine:

### 1. Prerequisites
Make sure you have **Node.js** (v16 or higher) and **Git** installed.

### 2. Clone the Repository
Terminal / Command Prompt me ye command chalao:
```bash
git clone [https://github.com/kashish-56/Student-Management-System.git](https://github.com/kashish-56/Student-Management-System.git)
```

### 3. Navigate to Project Folder
```bash
cd Student-Management-System
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Run Development Server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`! 🎉

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👩‍💻 Author

Built with ❤️ and curiosity by **Kashish Kumari** 🚀  
*Computer Science & Engineering Student*

> *"Building clean UI and managing seamless logic, one component at a time. Always learning, constantly shipping code!"*

📬 **Let's Connect!**
- 🐙 **GitHub:** [kashish-56](https://github.com/kashish-56)
- 💼 **LinkedIn:** [Kashish Kumari](https://www.linkedin.com/in/kashish-kumari-051936327/)

---

## 📄 License

Distributed under the **MIT License**. Feel free to use and modify for learning and project work.

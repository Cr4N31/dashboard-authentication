# Dashboard Authentication (WIP)

This project is a **React-based dashboard application** focused on building a **solid authentication flow** and laying the foundation for a full dashboard system.

The goal of this project is to **master core React concepts** such as state lifting, component composition, conditional rendering, and layout architecture before introducing advanced features.

⚠️ **Note:** This project is **not complete yet**. The authentication flow works, but the dashboard is still under active development. Upcoming updates will include full dashboard features, widgets, and improved UI/UX.

---

## ✨ Features Implemented So Far

* Login & Register UI (state-based, no backend yet)
* Authentication layout separation
* Conditional rendering based on auth state
* Logout functionality
* Dashboard layout gating (only accessible after authentication)
* Sidebar and Topbar scaffolding
* State-based page switching (no routing library yet)

---

##  Key Concepts Practiced

* Lifting state to parent components (`App.jsx`)
* Passing state setters (`setUser`, `setCurrentPage`) as props
* Controlled form inputs
* Component grouping by responsibility
* Layout-based architecture (Auth vs Dashboard)

---

##  Project Structure

```txt
dashboard-authentication/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── assets/             # images, icons, logos
│   ├── components/
│   │   ├── auth/           # Authentication related components
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   └── AuthToggle.jsx
│   │   ├── dashboard/      # Dashboard related components
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   └── Widgets.jsx
│   │   └── shared/         # Components used across multiple sections
│   │       ├── Button.jsx
│   │       └── Card.jsx
│   ├── pages/
│   │   ├── Home.jsx        # Optional page if using routes
│   │   └── Profile.jsx     # Example page
│   ├── hooks/              # Custom React hooks
│   ├── context/            # Context API or Auth context
│   ├── utils/              # Helper functions
│   └── styles/             # Global styles or Tailwind config
│       └── tailwind.css
├── package.json
└── tailwind.config.js

```

---

##  Authentication Flow (Current)

1. `App.jsx` holds the global `user` state
2. If `user === null` → `AuthLayout` is rendered
3. On login/register → `setUser(data)` is called
4. If `user !== null` → `DashboardLayout` is rendered
5. Logout resets `user` to `null`, returning to auth screens

---

##  Dashboard (In Progress)

* Sidebar navigation
* Topbar with search and notifications
* State-based page switching
* Widget system currently being built

---

## 🚧 Planned Updates

* Dashboard widgets (stats, projects, activity feed)
* Better layout styling
* Mock data integration
* Context API for global state
* Optional routing with React Router
* Final UI polish

---

##  Status

**Work in Progress 🚧**
This repository represents an **ongoing learning and building process**. The final product will include a fully functional dashboard experience.

---

##  Tech Stack

* React
* JavaScript (ES6+)
* CSS / Tailwind (planned / optional)

---

##  Final Note

This project prioritizes **clean architecture and understanding React fundamentals** over speed. Expect frequent refactors and improvements as features are added.

New updates will be pushed as the dashboard evolves into its final form.

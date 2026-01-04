# Dashboard Authentication & Layout System (WIP)

This project is a **React-based dashboard application** focused on building a **clean authentication flow**, **state-driven layouts**, and a **scalable dashboard architecture** without relying on routing libraries or a backend (yet).

The primary goal is to **deeply understand core React concepts** — state lifting, controlled data flow, component composition, conditional rendering, and layout separation — before introducing advanced tooling.

> **Status:** Actively in development. Authentication works, dashboard structure is stable, widgets and UI polish are ongoing.

---

## Features Implemented

### Authentication

* Login & Register UI (state-based, no backend)
* Authentication layout separation
* Conditional rendering based on auth state
* Logout functionality
* Dashboard access gated by authentication state

### Dashboard System

* Sidebar and Topbar layout scaffolding
* State-based page switching (no React Router yet)
* Projects page with dynamic project list
* Projects widget on dashboard synced with Projects page
* Add-project flow (Topbar → Dashboard state)
* Internal widget scrolling (widgets scroll within their containers)
* Status-based styling (Completed / In Progress / Pending)

### UI & Visuals

* Tailwind CSS for layout and styling
* Recharts used for mock analytics charts
* AOS animations for entry transitions
* Responsive layout behavior (desktop-first, mobile-aware)

---

## What I Learned

Through building this project, I strengthened my understanding of:

* **State ownership & single source of truth**
  Keeping shared data (like projects) in one parent component and passing it down instead of duplicating state.

* **Lifting state correctly**
  Moving state up to `DashboardLayout` so multiple pages and widgets stay in sync.

* **Data flow in React**
  Passing data and callbacks down the component tree and avoiding unnecessary prop drilling.

* **Conditional rendering over routing**
  Managing page navigation using state instead of React Router to understand how routing works internally.

* **Component responsibility separation**
  Splitting logic between layouts, pages, widgets, and shared components.

* **Controlled UI behavior**
  Handling scrolling inside components instead of the entire page using height constraints and overflow control.

* **Styling driven by data**
  Dynamically applying styles based on project status rather than hardcoding UI behavior.

* **Dashboard layout architecture**
  Structuring a dashboard in a way that scales as features grow.

---

## Project Structure

```txt
dashboard-authentication/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx                # Root auth gating logic
│   ├── index.js
│   ├── assets/                # Images, icons, logos
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   └── AuthToggle.jsx
│   │   ├── dashboard/
│   │       ├── DashboardLayout.jsx
│   │       ├── Sidebar.jsx
│   │       ├── Topbar.jsx
│   │       ├── widgets/
│   │       │   ├── StatsWidget.jsx
│   │       │   ├── ProjectsWidget.jsx
│   │       │   └── ActivityWidget.jsx
│   │        
│   │      
│   ├── pages/
│   │   ├── Analytics.jsx
│   │   └── Projects.jsx
│   ├── hooks/                 # Reserved for custom hooks
│   ├── context/               # Planned Auth / Global context
│   ├── utils/                 # Helper functions
│   └── styles/
│       └── tailwind.css
├── package.json
└── tailwind.config.js
```

---

## Authentication Flow (Current)

1. `App.jsx` holds the global `user` state
2. If `user === null` → `AuthLayout` is rendered
3. Login/Register sets user via `setUser`
4. If `user !== null` → `DashboardLayout` is rendered
5. Logout resets user state and returns to auth screens

No backend or token system is implemented yet — this is intentional.

---

## Dashboard Architecture

* `DashboardLayout` owns shared dashboard state (projects, current page)
* Sidebar controls page state (`Dashboard`, `Analytics`, `Projects`)
* Topbar can trigger global actions (e.g., add project)
* Widgets receive data via props (no duplicated state)
* Projects page and Projects widget are synced from the same data source

---

## 🛠 Planned Improvements

* Context API for auth and dashboard state
* Optional routing with React Router
* Persistent authentication (localStorage / mock tokens)
* Expanded widgets (activity feed, notifications)
* Better mobile UX
* UI polish and animation refinement
* Backend integration (Node.js / Firebase / Supabase)

---

## Tech Stack

* React
* JavaScript (ES6+)
* Tailwind CSS
* Recharts
* AOS (Animate On Scroll)

---

## Status

**Work in Progress**

This repository represents an **intentional learning-first build**. Refactors are expected. Features are added only after understanding the underlying concepts.

The final goal is a **clean, scalable dashboard foundation** that can later support real backend data and advanced patterns.

---

## Final Note

This project prioritizes **architecture clarity and data flow discipline** over speed or heavy abstractions. Every feature is built to reinforce React fundamentals before moving on to advanced solutions.

Updates will continue as the dashboard evolves.

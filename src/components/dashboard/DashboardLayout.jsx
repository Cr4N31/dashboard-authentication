import { useState } from 'react';
import SideBar from "./SideBar";
import Topbar from './Topbar';
import DashboardWidgets from './widgets/DashboardWidget';
import Analytics from './pages/Analytics';  
import Projects from './pages/Projects';

function DashboardLayout({ user, setUser, notifications }) {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar
  const [projects, setProjects] = useState([
      {
        id: 1,
        name: "Dashboard UI",
        status: "In Progress",
        createdAt: "2026-01-01",
      },
      {
        id: 2,
        name: "Auth System",
        status: "Completed",
        createdAt: "2025-12-20",
      },
  ]);

   const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: `New Project ${projects.length + 1}`,
      status: "Pending",
      createdAt: new Date().toLocaleDateString(),
    };

    setProjects((prev) => [...prev, newProject]);
  };

  

  return (
    <div className="flex h-screen bg-gray-100" >
      {/* Sidebar */}
      <SideBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setUser={setUser}
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)} // pass the function here
      />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Topbar
          currentPage={currentPage}
          notifications={notifications}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onAddProject={addProject}
        />
        <div data-aos="fade-up">
            <div className='font-bold text-2xl md:text-3xl p-4 md:p-2 ml-0 md:ml-4 mt-8'>
                <p>Welcome, {user?.email || user?.username}!</p>
            </div>

            <div className="p-2 md:p-6 mt-2">
            {currentPage === "Dashboard" && (
              <DashboardWidgets projects={projects} />
            )}

            {currentPage === "Analytics / Overview" && <Analytics/>}
            {currentPage === "Projects" && <Projects projects={projects}/>}
            </div>
        </div>

      </main>
    </div>
  );
}

export default DashboardLayout;

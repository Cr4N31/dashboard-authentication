import { useState } from 'react';
import SideBar from "./SideBar";
import Topbar from './Topbar';
import DashboardWidgets from './widgets/DashboardWidget';

function DashboardLayout({ user, setUser, notifications }) {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar

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
        />
        <div data-aos="fade-up">
            <div className='font-bold text-3xl p-4 mx-4 mt-8'>
                <p>Welcome, {user?.email || user?.username}!</p>
            </div>

            <div className="p-6 mt-2">
            {currentPage === "Dashboard" && <DashboardWidgets />}
            {currentPage === "Analytics / Overview" && (
                <h3 className="text-2xl font-semibold">Analytics Page</h3>
            )}
            {currentPage === "Projects" && (
                <h3 className="text-2xl font-semibold">Projects Page</h3>
            )}
            </div>
        </div>

      </main>
    </div>
  );
}

export default DashboardLayout;

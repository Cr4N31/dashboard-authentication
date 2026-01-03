import { useState } from 'react';
import NotificationIcon from '../../assets/notifications-svgrepo-com.svg';
import SearchIcon from '../../assets/search-svgrepo-com.svg'

function Topbar({ currentPage, notifications = [], toggleSidebar, onAddProject }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <header className="w-full bg-white flex items-center justify-between px-4 md:px-6 py-4 shadow-md sticky top-0 z-10">
      {/* Left: Hamburger + Page Title */}
      <div className="flex items-center space-x-2">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden px-3 py-2 text-black hover:bg-gray-100 rounded"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Page Title */}
        <h2 className="text-xl md:text-2xl font-bold text-black">{currentPage}</h2>
      </div>

      {/* Right-side controls */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Search: icon on mobile, input on desktop */}
        <div className="relative">
          <button className="md:hidden p-2 rounded hover:bg-gray-100">
            <img src={SearchIcon} className='w-6 h-6'/>
          </button>
          <input
            type="search"
            placeholder="Search"
            className="hidden md:block px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Add button */}
       <button
          onClick={onAddProject}
          className="p-2 md:px-4 md:py-2 bg-black text-white font-bold rounded hover:bg-gray-800"
        >
          <span className="md:hidden text-xl">+</span>
          <span className="hidden md:inline">+</span>
      </button>
        {/* Notification icon with tooltip */}
        <div
          className="relative"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          <button className="p-2 rounded hover:bg-gray-100 relative">
            <img src={NotificationIcon} alt="Notification" className="w-6 h-6" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>

          {/* Tooltip */}
          {isTooltipVisible && (
            <div className="absolute top-10 right-0 bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
              Notifications
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;

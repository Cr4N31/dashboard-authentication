function SideBar({ currentPage, setCurrentPage, setUser, sidebarOpen, closeSidebar }) {
  const sidebarItems = [
    { id: 1, item: "Dashboard" },
    { id: 2, item: "Analytics / Overview" },
    { id: 3, item: "Projects" },
  ];

  return (
    <nav
      className={`
        w-64 bg-white h-full shadow-md fixed flex flex-col z-50 justify-between transform
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:h-auto
      `}
    >
      {/* Close button for mobile */}
      <div className="flex justify-end md:hidden p-4">
        <button
          onClick={closeSidebar} // <-- this now works
          className="text-black text-xl font-bold hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Sidebar menu items */}
      <div className="mt-6">
        <ul className="flex flex-col space-y-2">
          {sidebarItems.map((sidebaritem) => (
            <li key={sidebaritem.id}>
              <button
                onClick={() => setCurrentPage(sidebaritem.item)}
                className={`
                  w-full text-left px-6 py-3 rounded-r-lg font-medium transition 
                  ${currentPage === sidebaritem.item
                    ? "bg-black text-white"
                    : "text-black hover:bg-gray-100"}
                `}
              >
                {sidebaritem.item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom buttons */}
      <div className="mb-6 px-6 flex flex-col space-y-2">
        <button className="w-full text-left px-6 py-3 rounded-lg text-black hover:bg-gray-100 font-medium">
          Settings
        </button>
        <button
          onClick={() => setUser(null)}
          className="w-full hover:text-red-600 transition-all ease text-left px-6 py-3 rounded-lg text-black hover:bg-gray-100 font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default SideBar;

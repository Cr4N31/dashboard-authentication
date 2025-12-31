function SideBar({ currentPage, setCurrentPage, setUser }) {
  const sidebarItems = [
    { id: 1, item: "Dashboard" },
    { id: 2, item: "Analytics / Overview" },
    { id: 3, item: "Projects" }
  ];

  return (
    <nav>
      <ul>
        {sidebarItems.map((sidebaritem) => (
          <li key={sidebaritem.id}>
            <button onClick={() => setCurrentPage(sidebaritem.item)}>
              {sidebaritem.item}
            </button>
          </li>
        ))}
        <li>
          <button>Settings</button>
        </li>
        <li>
          <button onClick={() => setUser(null)}>Logout</button> {/* resets user */}
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;

import { useState } from 'react'
import SideBar from "./SideBar"
import Topbar from './Topbar'

function DashboardLayout ({user, setUser}) {
    const [currentPage, setCurrentPage] = useState("Dashboard");
    return(
        <div>
            <Topbar
                currentPage={currentPage}
            />
            <SideBar
                 currentPage={currentPage} 
                 setCurrentPage={setCurrentPage} 
                 setUser={setUser} // pass setUser to sidebar
            />
        </div>
    )
}
export default DashboardLayout
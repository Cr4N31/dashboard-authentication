import { useState } from 'react'
import AuthLayout from "./components/auth/AuthLayout"
import DashboardLayout from "./components/dashboard/DashboardLayout"
function App() {
  const [user, setUser] = useState(null)

  return(
    <div>
      {!user ? (
        <AuthLayout setUser={setUser}/>
      ) : (
        <DashboardLayout user={user} setUser={setUser}/>
      )}
    </div>
  )
}

export default App

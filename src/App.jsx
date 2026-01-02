import { useState, useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import AuthLayout from "./components/auth/AuthLayout"
import DashboardLayout from "./components/dashboard/DashboardLayout"
function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,       // animation duration
      easing: 'ease-in-out',
      once: false,          // animate only once
    });
  }, []);

  const [user, setUser] = useState(null)

  return(
    <div>
      {!user ? (
        <AuthLayout setUser={setUser}/>
      ) : (
        <DashboardLayout user={user} setUser={setUser} data-aos="fade-in"/>
      )}
    </div>
  )
}

export default App

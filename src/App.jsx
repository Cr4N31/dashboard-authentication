import { useState, useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import AuthLayout from "./components/auth/AuthLayout"
import DashboardLayout from "./components/dashboard/DashboardLayout"
function App() {
  const [user, setUser] = useState(null)

  
  useEffect(() => {
    AOS.init({
      duration: 800,       // animation duration
      easing: 'ease-in-out',
      once: false,          // animate only once
    });
  }, []);

    useEffect(() => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) setUser(JSON.parse(savedUser));
    }, []);




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

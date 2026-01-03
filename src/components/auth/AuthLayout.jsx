import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthToggle from "./AuthToggle";

function AuthLayout({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  function handleAuthSubmit(data) {
    console.log(isLogin ? "Login data:" : "Register data:", data);
    localStorage.setItem("user", JSON.stringify(data))
    setUser(data);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Auth Toggle */}
      <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />

      {/* Form Card */}
      {isLogin ? (
        <LoginForm onSubmit={handleAuthSubmit} />
      ) : (
        <RegisterForm onSubmit={handleAuthSubmit} />
      )}
    </div>
  );
}

export default AuthLayout;

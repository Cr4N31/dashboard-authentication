import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthToggle from "./AuthToggle"

function AuthLayout ({setUser}) {
    const [isLogin, setIsLogin] = useState(true)

    function handleAuthSubmit(data) {
        console.log(isLogin ? "Login data:" : "Register data:", data);
        setUser(data)
    }

    return(
    <div>
        {isLogin ? (
            <LoginForm onSubmit={handleAuthSubmit} />
        ) : (
            <RegisterForm onSubmit={handleAuthSubmit} />
        )}
        <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
    )
}

export default AuthLayout
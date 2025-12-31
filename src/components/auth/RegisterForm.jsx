import { useState } from "react"

function RegisterForm({onSubmit}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    function handleValidation(e) {
        e.preventDefault();

        if( password.length < 10){
            setError("Password too short")
            return;
        }

        if ( password !== confirmPassword) {
            setError("Passwords do not match")
            return;
        }

        onSubmit?.({username, email, password, confirmPassword});
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return(
        <form onSubmit={handleValidation}>
            <label>
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
            </label>
            <label>
                <p>Email Address</p>
                <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </label>
            <label>
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Input Password"
                    id="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </label>

            <label>
                <p>Confirm Password</p>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
            </label>
            
            {error && (
                <p>
                {error}
                </p>
            )}

            <button
                type="submit"
                disabled={!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()}
            >
                Register
            </button>
        </form>
    )
}

export default RegisterForm
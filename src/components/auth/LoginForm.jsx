import { useState } from 'react';

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleValidation(e) {
        e.preventDefault()
        onSubmit?.({email, password})
        setEmail("");
        setPassword("")
    }
    return(
        <form method="POST" onSubmit={handleValidation}>
            <label>
                <p>E-mail</p>
                <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </label>
            <label>
                <p>Password</p>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </label>
            <button
                type="submit"
                disabled={!email.trim() || !password.trim()}
            >
                Login
            </button>
        </form>
    )

}

export default LoginForm
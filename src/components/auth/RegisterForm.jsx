import { useState } from "react";

function RegisterForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleValidation(e) {
    e.preventDefault();

    if (password.length < 10) {
      setError("Password too short (minimum 10 characters)");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    onSubmit?.({ username, email, password, confirmPassword });
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  }

  return (
    <form
      onSubmit={handleValidation}
      className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
    >
      <label className="flex flex-col">
        <span className="text-black font-semibold mb-1">Username</span>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-black font-semibold mb-1">Email Address</span>
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-black font-semibold mb-1">Password</span>
        <input
          type="password"
          placeholder="Input Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-black font-semibold mb-1">Confirm Password</span>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </label>

      {error && (
        <p className="text-red-600 font-medium text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={
          !username.trim() ||
          !email.trim() ||
          !password.trim() ||
          !confirmPassword.trim()
        }
        className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 disabled:opacity-50 transition"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;

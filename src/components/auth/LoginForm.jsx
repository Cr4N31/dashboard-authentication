import { useState } from 'react';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValidation(e) {
    e.preventDefault();
    onSubmit?.({ email, password });
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form 
        method="POST" 
        onSubmit={handleValidation} 
        className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md"
      >
        <label className="block mb-4">
          <p className="text-black font-semibold mb-1">E-mail</p>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>
        <label className="block mb-6">
          <p className="text-black font-semibold mb-1">Password</p>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>
        <button
          type="submit"
          disabled={!email.trim() || !password.trim()}
          className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

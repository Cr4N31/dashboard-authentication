function AuthToggle({ isLogin, setIsLogin }) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => setIsLogin(true)}
        disabled={isLogin}
        className={`
          px-6 py-2 rounded font-semibold transition 
          ${isLogin ? 'bg-black text-white cursor-not-allowed' : 'bg-white text-black border border-black hover:bg-black hover:text-white'}
        `}
      >
        Login
      </button>

      <button
        onClick={() => setIsLogin(false)}
        disabled={!isLogin}
        className={`
          px-6 py-2 rounded font-semibold transition 
          ${!isLogin ? 'bg-black text-white cursor-not-allowed' : 'bg-white text-black border border-black hover:bg-black hover:text-white'}
        `}
      >
        Register
      </button>
    </div>
  );
}

export default AuthToggle;


function AuthToggle({isLogin, setIsLogin}){
    return(
        <div>
        <button
            onClick={() => {setIsLogin(true)}}
            disabled={isLogin}
        >
            Login
        </button>

        <button
             onClick={() => {setIsLogin(false)}}
             disabled={!isLogin}
        >
            Register
        </button>
        </div>
    )
}

export default AuthToggle
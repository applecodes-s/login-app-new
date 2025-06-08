import { useNavigate } from "react-router-dom";

// Note: The task instructions specified to only show an error message on login failure
// and redirect only on successful login. However, I noticed that many other students
// implemented a separate page for login failure as well. So, I created this failure page
// too, but I did not use it in the main flow since the task specifically asked to just display the error message.


const LoginFailed = () => {
    const navigate = useNavigate()

    return(
        <div className="flex flex-col items-center justify-center h-screen text-center bg-black">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Invalid email or password</h1>
        <p className="mb-6 text-white">Please check your credentials and try again.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Try Again
        </button>
      </div>    
    )
}

export default LoginFailed;
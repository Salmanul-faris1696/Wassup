import { Link } from "react-router-dom"

const Login = () => {
  return (
	<div className="flex flex-col items-center justify-center min-w-96 mx-auto shadow-sm shadow-blue-500">
    <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        {/* using tailwind glassmorphism genrator */}
        Login  
        <span className="text-blue-500 "> ChatApp</span>
      </h1>
      <form action="">

        <div>
         <label htmlFor="" className="label p-2">
          <span className="text-base label-text text-blue-500">Username</span>
         </label>
         <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
        </div>

        <div>
          <label htmlFor="" className="label">
            <span className="text-base label-text text-blue-500">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
        </div>

        <Link to="/signup" className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block text-gray-100">
          {"Don't "} have an account ?
        </Link>

        <div>
          <button className="btn btn-block btn-sm mt-2 ">Login</button>
        </div>


      </form>
    </div>

  </div>
  )
}

export default Login
import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"

const SignUp = () => {

  const [inputs , setInputs] = useState(
    {
      fullName : '' ,
      username : '' ,
      password : '' ,
      confirmPassword  : '' ,
      gender : '' ,
    }
  )
  

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs , gender}) ;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs of signup",inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto shadow-sm shadow-blue-500">
    <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        {/* using tailwind glassmorphism genrator */}
        Sign Up  
        <span className="text-blue-500 "> ChatApp</span>
      </h1>
      <form action="" onSubmit={handleSubmit}>

        <div>
         <label htmlFor="" className="label p-2">
          <span className="text-base label-text text-blue-500">Full Name</span>
         </label>
         <input type="text" placeholder="Enter full name " className="w-full input input-bordered h-10" 
         value={inputs.fullName}
         onChange={(e) => setInputs({...inputs , fullName : e.target.value})}
         />
        </div>

        <div>
         <label htmlFor="" className="label p-2">
          <span className="text-base label-text text-blue-500">Username</span>
         </label>
         <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" 
         value={inputs.username}
         onChange={(e) => setInputs({...inputs , username : e.target.value})}/>
        </div>

        <div>
          <label htmlFor="" className="label">
            <span className="text-base label-text text-blue-500">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" 
          value={inputs.password}
          onChange={(e) => setInputs({...inputs , password : e.target.value})}/>
        </div>

        <div>
          <label htmlFor="" className="label">
            <span className="text-base label-text text-blue-500">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs , confirmPassword : e.target.value})} />
        </div>

        {/* Gender checkbox goes here */}
        <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

        <Link to={"/login"} className="text-sm hover:underline hover:text-blue-500  inline-block text-gray-100">
          already have an account ?
        </Link>

        <div>
          <button className="btn btn-block btn-sm  ">Sign up </button>
        </div>


      </form>
    </div>

  </div>
  )
}

export default SignUp
import { useState } from "react"
import toast from "react-hot-toast";

const useSignup = () => {
	const [loading , setLoading] = useState(false) ;
	const signup = async ({fullName , username , password , confirmPassword , gender }) =>{
		const sucess = handleInputErrors({fullName , username , password , confirmPassword  , gender })
		if(!sucess) return;
		setLoading(true)

			try {
				const res = await fetch("/api/auth/signup" , {
					method : 'POST',
					headers : {"content-Type" : "application/json"},
					body:JSON.stringify({fullName , username , password , confirmPassword , gender},)
				})
				const data = await res.json()
				if(data.error){
					throw new Error(data.error)
				}
				console.log("SIGNUP DATA from client side " , data)	
			} catch (error) {
				toast.error(error.messaage)	
			}finally{
				setLoading(false)
			}	
	}
	
	return {loading , signup}
 
}

export default useSignup

function handleInputErrors({fullName , username , password , confirmPassword  , gender}){
	if(!fullName || !username || !password || !confirmPassword || !gender){
		toast.error('Please ensure all fields are completed.')
		return false
	}

	if(password !== confirmPassword ) {
		toast.error('Password and confirm password must be the same.')
		return false
	}

	if(password.length < 8) {
		toast.error('password must atleast 8 character ')
		return false
	}

	return true

}
import bcrypt from "bcryptjs" 
import User from "../models/user.model.js"
import generateTokensAndSetCookie from "../utils/generateToken.js"

export const signup = async (req , res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body
		const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
		const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

		const user = await User.findOne({username})
		if (user) {
			return res.status(400).json({ error : "User is alraedy exists "})
		}

		if (password !== confirmPassword) {
			return res.status(400).json({ error:"Passoword and confirm password don't matching "})
		}

		//hash the password here
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password , salt)

		const newUser = new User({
			fullName,
			username,
			password :hashPassword ,
			gender,
			profilePic: gender == "male" ? maleProfile : femaleProfile 
		})
		if (newUser) {
			// generate jwt tokens 
			generateTokensAndSetCookie(newUser._id , res)
			await newUser.save()
			res.status(201).json({
				_id : newUser._id,
				fullName : newUser.fullName,
				username : newUser.username,
				password : newUser.profilePic,
			})
		} else {
			res.status(500).json({error : "invalid user data "})
		}
	} catch (error) {
		console.log("signup controller error check >> " ,error.message)
		res.status(500).json({error : "internal sever error "})
	}
}

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username })
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
		
		if (!user || !isPasswordCorrect) { 
			res.status(400).json({error : "inavlid username or password"})
		}

		generateTokensAndSetCookie(user._id, res);

		res.status(201).json({
			_id : user._id,
			fullName : user.fullName,
			username : user.username,
			password : user.profilePic,
		})
	} catch (error) {
		console.log("login controller error check >> " ,error.message)
		res.status(500).json({error : "internal sever error "})
	}
}

export const logout = async (req , res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 })
		res.status(201).json({message : "Logged out successfully "})
		
	} catch (error) {
		console.log("loginout controller error check >> " ,error.message)
		res.status(500).json({error : "internal sever error "})
	}
}
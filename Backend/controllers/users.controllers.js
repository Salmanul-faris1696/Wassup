import User from "../models/user.model.js";

const getUsersForSidebar = async (req , res )=> {
	try {
		const loggedUsers = req.user._id;
		const filteredUser = await User.find({_id : { $ne : loggedUsers}}).select("-password")

		res.status(200).json(filteredUser)
		
	} catch (error) {
		console.log("Error in getUsersForSidebar " , error.message);
		res.status(500).json({error :"Internal sever error "} )
	}
}

export default getUsersForSidebar
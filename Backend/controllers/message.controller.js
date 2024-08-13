import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.message.push(newMessage._id);
		}

		// await newMessage.save(); 
		// await conversation.save();

		await Promise.all([conversation.save() , newMessage.save()]) // this will run in parallel while using above two line code it will take two more sec to save or one after another instead of using this it done two funtn at a time 

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in Message controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
 
export const getMessages = async (req , res )=> {
	try {
		const {id:userToChartId} = req.params ;
		const senderId = req.user._id ;

		const conversation = await Conversation.findOne({
			participants : { $all :[senderId , userToChartId]}
		}).populate("message") // this is not referance its a actual message 

		if(!conversation) {
			return res.status(200).json([])
		}

		const message = conversation.message
		res.status(200).json(message)
		
	} catch (error) {
		console.log("Error in getMessage controller : " , error.message)
		res.status(500).json({error:"Internal sever error"})
	}
}
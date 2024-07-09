import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URL);
		console.log("Successfull✅! connected to the DataBase");
	} catch (error) {
		console.log("Error❌! couldn't connect to the DataBase" , error.message);
	}
}

export default connectToMongoDB;
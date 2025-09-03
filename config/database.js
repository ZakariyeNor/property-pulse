import mongoose from "mongoose";


let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // if the databse is already connected,
    // don't connect again
    if (connected) {
        console.log("Connected to The mongoDB already");
        return;
    }
    
    // Connect to mongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }


};

export default connectDB
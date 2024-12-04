import mongoose from 'mongoose';

let connected = false;

const ConnectDB = async () => {
  mongoose.set('strictQuery', true);

  // If DB is already connected, return
  if (connected) return;

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGO_URI)
    connected = true;
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

export default ConnectDB;
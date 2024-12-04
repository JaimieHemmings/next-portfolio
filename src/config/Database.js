import mongoose from 'mongoose';

let connected = false;

const ConnectDB = async () => {
  mongoose.set('strictQuery', true);

  // If DB is already connected, return
  if (connected) return;
  console.log("Connecting...")
  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

export default ConnectDB;
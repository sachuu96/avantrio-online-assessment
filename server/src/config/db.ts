import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/avantrio';

export const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME || 'avantrio',
      retryWrites: true,
      w: 'majority',
    });

    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1); // Exit if unable to connect
  }
};
import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

// Connect to the database
const connection = async () => {
  const dbUrl = "mongodb://localhost:27017/CMPT_A45";
  try {
    const con = await mongoose.connect(dbUrl);
    console.log('Database connected');
  } catch (error) {
    console.log('Error in database connection', error);
  }
};

export default connection;

import mongoose from "mongoose";

const DBString = async () => {
  try {
    const Connect = await mongoose.connect(process.env.DB_STRING);
    console.log(`DB CONNECTED : ${Connect.connection.name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default DBString;

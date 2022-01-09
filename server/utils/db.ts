import mongoose from "mongoose";

export async function Connect(uri: string) {
   return mongoose.connect(uri);
}

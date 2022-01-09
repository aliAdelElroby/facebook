import express from "express";
import dotenv from "dotenv";
import { Connect } from "./utils/db";

// Env Config
dotenv.config();

// Constants
const app = express();
const { PORT, MONGO_URI } = process.env;

// Connect With DB
Connect(MONGO_URI as string)
   .then(() => {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   })
   .catch((err) => console.log("Error Connection:", err));

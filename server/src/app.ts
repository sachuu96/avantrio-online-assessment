import express, { NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectToMongo } from "./config/db";
import router from "./route/index";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(router);

connectToMongo();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

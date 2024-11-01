import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./lib/db.js";
import authoRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authoRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});

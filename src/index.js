import express from "express";
import cors from "cors";
import emailRoutes from "./routes";

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware
app.use(cors());

//routes
app.use("/server/email", emailRoutes);

export default app;

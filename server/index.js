import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";


import connectDB from "./mongoDB/connect.js";
import postRoutes from "./route/postRoute.js";
import dalleRoutes   from "./route/dalleRoutes.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes )
app.use('/api/v1/dalle',dalleRoutes )



app.get("/", async (req, res) => {
  res.send("Hello Form Dall-i");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URI);

    app.listen(8080, () =>
      console.log("Server Started on pots http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();

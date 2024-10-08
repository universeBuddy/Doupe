import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";

import { v2 as cloudinary } from "cloudinary";

import Post from "../mongoDB/models/post.js";
dotenv.config();
const router = express.Router();

const configuration = new OpenAI({ apiKey: process.env.OPENAI_KEY });

router.route("/").get((req, res) => {
  res.send("hello");
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;
  try {
    const aiResponse = await configuration.images.generate({
      prompt:"image of superman",
      n:1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;

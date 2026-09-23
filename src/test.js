import Groq from "groq-sdk";
import { configDotenv } from "dotenv";

configDotenv();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

console.log("Before Call");

const response = await groq.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "user",
      content: "Hello",
    },
  ],
});

console.log("After Call");
console.log(response.choices[0].message.content);
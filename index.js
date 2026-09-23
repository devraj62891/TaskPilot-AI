console.log("Step 1");

import { ChatGroq } from "@langchain/groq";
import { configDotenv } from "dotenv";
configDotenv();

console.log("Step 2");
console.log(process.env.GROQ_API_KEY);
const llm = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
});

console.log("Step 3");

const response = await llm.invoke("Hello");

console.log("Step 4");
console.log(response.content);
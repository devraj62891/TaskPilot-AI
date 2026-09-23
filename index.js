import { ChatGroq } from "@langchain/groq";
import { configDotenv } from "dotenv";
configDotenv();

const llm = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "openai/gpt-oss-20b",
});

const response = await llm.invoke("Hello");

console.log(response.content);
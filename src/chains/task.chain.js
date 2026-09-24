import { RunnableSequence } from "@langchain/core/runnables";
import { taskPrompt } from "../prompts/task.prompt.js";
import { llm } from "../llm/groq.js";
import { taskParser } from "../parsers/task.parser.js";

export const taskChain = RunnableSequence.from([
  taskPrompt,
  llm,
  taskParser,
]);
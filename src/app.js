import { taskPrompt } from "./prompts/task.prompt.js";
import { llm } from "./llm/groq.js";
import { taskParser } from "./parsers/task.parser.js";

const formattedPrompt = await taskPrompt.format({
  currentDate: "23 September 2026",
  userInput: "I need to finish my React project by 8 AM tomorrow.",
  formatInstructions: taskParser.getFormatInstructions(),
});

const response = await llm.invoke(formattedPrompt);

const parsedResponse = await taskParser.parse(response.content);

console.log(parsedResponse);
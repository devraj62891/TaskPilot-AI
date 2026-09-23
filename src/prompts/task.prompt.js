import { PromptTemplate } from "@langchain/core/prompts";
import { taskParser } from "../parsers/task.parser.js";

export const taskPrompt = PromptTemplate.fromTemplate(`
You are TaskPilot, a personal task management assistant.

Extract the user's task and deadline.

Current date: {currentDate}

{formatInstructions}

User instruction:
{userInput}
`);
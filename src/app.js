import { llm } from "./llm/groq.js";
import { createTaskTool } from "./tools/task.tool.js";

const llmWithTools = llm.bindTools(
  [createTaskTool],
  {
    tool_choice: "create_task",
  }
);

const userInput =
  "I need to finish my React project by 8 AM tomorrow.";

// Step 1: Ask the LLM to decide/use the tool
const response = await llmWithTools.invoke(userInput);

console.log("LLM requested:", response.tool_calls);

// Step 2: Get the tool call
const toolCall = response.tool_calls[0];

// Step 3: Execute the tool
const toolResult = await createTaskTool.invoke(toolCall.args);

console.log("Tool result:", toolResult);

// Step 4: Send the tool result back to the LLM
const finalResponse = await llm.invoke([
  {
    role: "user",
    content: userInput,
  },
  response,
  {
    role: "tool",
    tool_call_id: toolCall.id,
    content: toolResult,
  },
]);

console.log("Final response:", finalResponse.content);
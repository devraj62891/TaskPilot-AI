import { taskChain } from "./chains/task.chain.js";
import { taskParser } from "./parsers/task.parser.js";

const result = await taskChain.invoke({
  currentDate: "23 September 2026",
  userInput: "I need to pay my electricity bill by 6 PM tomorrow.",
  formatInstructions: taskParser.getFormatInstructions(),
});

console.log(result);


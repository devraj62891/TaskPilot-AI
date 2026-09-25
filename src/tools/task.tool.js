import { tool } from "@langchain/core/tools";
import { z } from "zod";

export const createTaskTool = tool(
  async ({ task, deadline, priority }) => {
    return `Task "${task}" created successfully. Deadline: ${deadline}. Priority: ${priority}.`;
  },
  {
    name: "create_task",
    description:
      "Creates a new task with a task name, deadline, and priority.",
    schema: z.object({
      task: z.string().describe("The task to be created"),
      deadline: z.string().describe("The deadline of the task"),
      priority: z
        .enum(["low", "medium", "high"])
        .describe("The priority of the task"),
    }),
  }
);
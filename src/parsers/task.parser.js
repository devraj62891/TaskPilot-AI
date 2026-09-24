import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";

export const taskParser = StructuredOutputParser.fromZodSchema(
  z.object({
    task: z.string().describe("The task the user wants to do"),

    deadline: z.string().describe("The task deadline"),

    priority: z
      .enum(["low", "medium", "high"])
      .describe("The priority of the task"),

    status: z
      .enum(["pending", "completed"])
      .describe("The current status of the task"),
  })
);
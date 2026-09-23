import { StringOutputParser } from "@langchain/core/output_parsers";

import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";

export const taskParser = StructuredOutputParser.fromZodSchema(
  z.object({
    task: z.string().describe("The task the user wants to do"),
    deadline: z.string().describe("The task deadline"),
  })
);
import { z } from "zod";
import { TodoItems } from "./types";

export function validateFormData(FormData: TodoItems) {
  return todoSchema.safeParse(FormData);
}

const isValidFutureDate = (date: string): boolean => {
  const dueDate = new Date(date);
  const now = new Date();
  return dueDate > now;
};

export const todoSchema = z.object({
  title: z
    .string()
    .min(3, "Title atleast 3 characters")
    .max(50, "The title should not exceed 50 characters"),
  description: z
    .string()
    .min(5, "Description atleast 5 characters")
    .max(200, "The description should not exceed 200 characters"),
  dueDate: z
    .string()
    .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: "Invalid due date format. Please use YYYY-MM-DD format",
    })
    .refine(isValidFutureDate, {
      message: "The due date must be set to a future date",
    }),
  status: z.enum(["Completed", "Pending"]),
});

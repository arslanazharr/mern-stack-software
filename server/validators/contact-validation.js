const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(50, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20, { message: "Phone number must not be more than 20 characters" }),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Message must be at least 3 characters" })
    .max(255, { message: "Message must not be more than 255 characters" }),
});

module.exports = contactSchema;

import { z } from "zod";

export const loginRequest = z.object({
  username: z.string(),
  password: z.string(),
});

export const loginResponse = z.object({
  refresh: z.string(),
  access: z.string(),
});

export type OtpCodeVerifyRequest = z.infer<typeof loginRequest>;
export type OtpCodeVerifyResponse = z.infer<typeof loginResponse>;

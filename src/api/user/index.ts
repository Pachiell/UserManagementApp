import { z } from "zod";

export const loginUserInfoResponse = z.object({
  id: z.number(),
  username: z.string(),
});

export type LoginUserInfoResponse = z.infer<typeof loginUserInfoResponse>;

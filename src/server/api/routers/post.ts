import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
const post = [
  {
    author: "",
    post: "🚀",
  },
  {
    author: "",
    post: "⚡️",
  },
  {
    author: "",
    post: "🎃",
  },
];
export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      return post;
    }),
  getAll: publicProcedure.query(() => {
    return post;
  }),
});

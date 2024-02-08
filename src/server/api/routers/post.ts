import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
const posts = [
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
    .input(z.object({ post: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      posts.push({
        author: "",
        post: input.post,
      });

      return posts;
    }),
  getAll: publicProcedure.query(() => {
    return posts;
  }),
});

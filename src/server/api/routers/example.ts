import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const quizRouter = createTRPCRouter({
  answers: publicProcedure
    .input(z.object({ answers: z.array(z.string()) }))
    .query(({ input }) => {
      return {
        greeting: `Your ansers ${input.answers.reduce(
          (answer, base) => base + answer + ", ",
          ""
        )}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

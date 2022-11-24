import { router } from "../trpc";
import { exampleRouter } from "./example";
import { postRouter } from './posts'

export const appRouter = router({
  example: exampleRouter,
  posts: postRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

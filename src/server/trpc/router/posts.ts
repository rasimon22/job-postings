import { z } from 'zod'

import { router, publicProcedure } from "../trpc"

export const postRouter = router({
  getById: publicProcedure
    .input(z.number().min(0))
    .query(async ( { input }) => {
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
      await delay(3000)
      return `all posts for ${input}`

    })
})

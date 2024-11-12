import { currentUser } from "@clerk/nextjs/server"
import { router } from "../__internals/router"
import { privateProcedure, publicProcedure } from "../procedures"
import { db } from "@/db"

export const authRouter = router({
  getDatabaseSyncStatus: publicProcedure.query(async ({ c }) => {
    const auth = await currentUser()
    if (!auth) {
      return c.json({ isSynced: false })
    }
    const user = await db.user.findFirst({
      where: { externalId: auth.id },
    })
    if (!user) {
      await db.user.create({
        data: {
          quotaLimit: 100,
          email: auth.emailAddresses[0].emailAddress,
          externalId: auth.id,
        },
      })
      return c.json({ isSynced: true })
    }

    return c.json({ isSynced: true })
  }),

  getUserPlanStatus: privateProcedure.query(async ({ c }) => {
    const auth = await currentUser()
    if (!auth) {
      return c.json({ message: "User not logged in" })
    }
    const user = await db.user.findFirst({
      where: { externalId: auth.id },
    })

    if (!user) {
      return c.json({ message: "User not found" })
    }

    return c.json({ message: user.plan })
  }),
})

"use client"
import { SignIn } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

const Page = () => {
  const searchParmas = useSearchParams()
  const intent = searchParmas.get("intent")
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn
        forceRedirectUrl={intent ? `/dashboard?intent=${intent}` : "/dashboard"}
      />
    </div>
  )
}

export default Page

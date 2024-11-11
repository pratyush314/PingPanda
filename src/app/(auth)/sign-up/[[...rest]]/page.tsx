"use client"
import { SignUp } from "@clerk/nextjs"
import React from "react"

const page = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignUp />
    </div>
  )
}

export default page

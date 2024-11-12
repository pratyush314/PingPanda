"use client"
import React, { ReactNode } from "react"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import Heading from "./Heading"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface DashboardPageProps {
  title: string
  children?: ReactNode
  hideBackButton?: boolean
  cta?: ReactNode
}

const DashboardPage = ({
  title,
  children,
  cta,
  hideBackButton,
}: DashboardPageProps) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <section className="flex-1 h-full w-full flex flex-col">
      <div className="w-full p-6 sm:p-8 flex justify-between border-b border-gray-200">
        <div className="w-full flex flex-col items-center sm:flex-row sm:items-center  gap-6">
          <div className="flex items-center gap-8">
            {hideBackButton ? null : pathname === "/dashboard" ? null : (
              <Button
                onClick={() => {
                  router.push("/dashboard")
                }}
                className="w-fit bg-white"
                variant="outline"
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}
            <Heading>{title}</Heading>
          </div>

          {cta && <div>{cta}</div>}
        </div>
      </div>
      <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  )
}

export default DashboardPage

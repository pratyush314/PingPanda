import React, { ReactNode } from "react"
import Navbar from "../../components/Navbar"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout

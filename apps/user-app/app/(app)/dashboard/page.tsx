"use client"
import React from 'react'
import { signOut } from "next-auth/react"



function page() {
 

  return (
    <div>
      Dashboard
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default page


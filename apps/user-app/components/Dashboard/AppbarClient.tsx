"use client"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "../Dashboard/src/Appbar";
import { useRouter } from "next/navigation";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";

import {AcmeLogo} from "../Dashboard/AcmeLogo";
import { ModeToggle } from "../toggle";

export function AppbarClient() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session } = useSession();
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
<nav className="flex flex-wrap items-center justify-between p-3 bg-[#eeeee9]">
  <div className="flex items-center justify-between w-full sm:w-auto">
    <button
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="sm:hidden focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {/* Replace with your menu toggle icon */}
      <span className="block w-6 h-6 bg-gray-800"></span>
    </button>
    <div className="flex items-center">
      <AcmeLogo />
      <p className="font-bold text-gray-900 ml-2">QuickPay</p>
    </div>
  </div>

  <div className={`sm:flex gap-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
    <a href="#" className="block mt-4 sm:inline-block font-semibold sm:mt-0 text-gray-900  hover:text-cyan-600 transition duration-300 ease-in-out">Features</a>
    <a href="#" aria-current="page" className="block mt-4 font-semibold sm:inline-block sm:mt-0 text-gray-900  hover:text-cyan-600 transition duration-300 ease-in-out">Customers</a>
    <a href="#" className="block mt-4 font-semibold font- sm:inline-block sm:mt-0 text-gray-900 hover:text-cyan-600  transition duration-300 ease-in-out">Integrations</a>
  </div>

  <div className="hidden sm:flex items-center justify-end space-x-4">
  {session ? (
          <Button variant="contained" className="px-4 py-2 bg-[#de8cde] text-white" onClick={async () => { signOut() }}>Sign-Out</Button>
        ) : (
          <Button variant="contained" className="px-4 py-2 bg-[#de8cde] text-white" onClick={async () => { signIn() }}>Sign-In</Button>
        )}
  <Button variant="contained" className="px-4 py-2 bg-[#de8cde] 500 text-white" onClick={async()=>{router.push("/sign-up")}}>Sign-Up</Button>
  <ModeToggle/>
  </div>
 

  <div className={`w-full sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
    {menuItems.map((item, index) => (
      <a
        key={`${item}-${index}`}
        href="#"
        className={`block w-full px-4 py-2 text-lg ${
          index === 2 ? "text-blue-600" : index === menuItems.length - 1 ? "text-red-600" : "text-gray-900"
        } hover:bg-gray-100`}
      >
        {item}
      </a>
    ))}
  </div>
</nav>

  );


  // return (
  //  <div>
  //     <Appbar onSignin={signIn} onSignout={async () =>
  //       await signOut()
  //       router.push("/api/auth/signin")
  //     }} user={session.data?.user} />
  //  </div>
  // );
}

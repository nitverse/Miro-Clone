"use client";
import { UserButton } from '@clerk/nextjs';
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-emerald-500 flex items-center gap-x-4 p-5'>
        <div className='hidden lg:flex lg:flex-1 bg-yellow-400'>
           {/* TODO: Add SEarch  */}
            search
        </div>
        <UserButton />
    </div>
  )
}

export default Navbar
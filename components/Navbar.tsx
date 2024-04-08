'use client'

import { Heart, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className='flex items-center justify-between p-4 mx-auto cursor-poiter sm:max-w-4xl md:max-w-6xl'>
      <h1 className='text-3xl cursor-pointer' onClick={() => router.push('/')}>
        Coffee <span className='font-bold'>Shop</span>
      </h1>
      <div className='items-center justify-between hidden sm:flex'>
        <p>menu desktop</p>
      </div>
      <div className='flex sm:hidden'>
        <p>items menu mobile</p>
      </div>
      <div className='flex items-center justify-between gap-2 sm:gap-7'>
        <ShoppingCart strokeWidth={1} className='cursor-pointer' onClick={() => router.push('/cart')} />
        <Heart strokeWidth={1} className='cursor-pointer' onClick={() => router.push('/loved-products')} />
        <User strokeWidth={1} className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar

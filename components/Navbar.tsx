'use client'

import { BaggageClaim, Heart, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import MenuList from './MenuList'
import MenuMobileList from './MenuMobileList'
import ToggleTheme from './ToggleTheme'
import { useCart } from '@/hooks/useCart'
import { useLovedProducts } from '@/hooks/useLovedProducts'

const Navbar = () => {
  const router = useRouter()
  const cart = useCart()
  const { lovedItems } = useLovedProducts()

  return (
    <div className='flex items-center justify-between p-4 mx-auto cursor-poiter sm:max-w-4xl md:max-w-6xl'>
      <h1 className='text-3xl cursor-pointer' onClick={() => router.push('/')}>
        Coffee <span className='font-bold'>Shop</span>
      </h1>
      <div className='items-center justify-between hidden sm:flex'>
        <MenuList />
      </div>
      <div className='flex sm:hidden'>
        <MenuMobileList />
      </div>
      <div className='flex items-center justify-between gap-2 sm:gap-7'>
        {
          cart.items.length === 0 ? (
            <ShoppingCart strokeWidth={1} className='cursor-pointer' onClick={() => router.push('/cart')} />
          ) : (
            <div className='flex gap-1' onClick={() => router.push('/cart')}>
              <BaggageClaim strokeWidth={1} className='cursor-pointer' />
              <span>{cart.items.length}</span>
            </div>
          )
        }
        <Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`} onClick={() => router.push('/loved-products')} />
        <User strokeWidth={1} className='cursor-pointer' />
        <ToggleTheme />
      </div>
    </div>
  )
}

export default Navbar

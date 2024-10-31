import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header/Index'
import React from 'react'
import { Toaster } from "@/components/ui/toaster";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-[40px] bg-white'>
      <Header />
      {children}
      <Toaster />
      <Footer />
    </div>
  )
}

export default Layout

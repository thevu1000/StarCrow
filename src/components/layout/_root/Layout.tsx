import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header/Index'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-[40px] bg-white'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

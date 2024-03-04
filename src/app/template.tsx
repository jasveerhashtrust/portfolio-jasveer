import SwitchTheme from '@/components/shared/switch-theme'
import Header from '@/components/header'
import React, { ReactNode } from 'react'

const Template = ({children}:{children:ReactNode}) => {
  return (
    <>
      <SwitchTheme/>
      <div className='flex  max-w-[1140px] relative p-[20px] h-[100vh] container mx-auto gap-[30px] flex-col  items-center'>
     
     <Header/>
      {children}
  </div>
    </>
    
   
  )
}

export default Template
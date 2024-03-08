import SwitchTheme from '@/components/shared/switch-theme'
import Header from '@/components/header'
import React, { ReactNode } from 'react'
import Footer from '@/components/shared/footer'

const Template = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SwitchTheme />
            <div className="flex  max-w-[1024px] relative  p-[20px] container mx-auto gap-[20px] flex-col  items-center">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Template

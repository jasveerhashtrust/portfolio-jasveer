import React from 'react'
import Image from 'next/image'
import Button from './shared/button'
import Arrow from './icons/arrow'

const Header = () => {
    return (
        <div className="w-full border-b-0.5 border-solid  border-borderGreyLight container mx-auto flex flex-row flex-no-wrap h-min-content justify-between items-center overflow-visible pt-[20px] pb-[20px] relative">
            <div className=" flex flex-row flex-no-wrap gap-[15px] h-min-content  overflow-hidden p-0 relative w-min-content">
                <div className="rounded-[50%] overflow-hidden w-[40px]">
                    <Image
                        priority={true}
                        className="rounded-[40%]"
                        alt="avatar-logo"
                        src="/avatar.webp"
                        width={40}
                        height={40}
                    />
                </div>
                <div className=" flex flex-col items-baseline  justify-center gap-[4px]">
                    <span className="text-[11.5px] text-center hover:opacity-50  font-normal leading-[1em] text-white tracking-[0em]">
                        Jasveer Singh
                    </span>
                    <span className="text-[11.5px] text-center hover:opacity-50  font-normal leading-[1em]  text-textLight tracking-[0em]">
                        Software Developer
                    </span>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Button text="Buy Template" icon={<Arrow />} />
            </div>
        </div>
    )
}

export default Header

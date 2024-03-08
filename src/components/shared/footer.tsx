import React from 'react'

const Footer = () => {
    return (
        <div className=" w-full">
            <div className="items-start w-full flex flex-row border-t-0.5  border-solid border-borderGreyLight flex-nowrap h-min-content justify-between overflow-visible pb-[15px] relative"></div>
            <div className=" flex justify-between w-full items-center">
                <span className="text-[11.5px]  font-normal leading-[1em]  text-textLight tracking-[0em]">
                    © 2024 FF Widgets
                </span>
                <span className="text-[11.5px]  font-normal leading-[1em]  text-textLight tracking-[0em]">
                    Created by Favorit × Frame
                </span>
            </div>
        </div>
    )
}

export default Footer

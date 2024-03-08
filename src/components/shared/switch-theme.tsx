import React from 'react'

const SwitchTheme = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="fixed top-0 w-full z-10">
                <div className=" flex justify-center overflow-hidden p-0 relative flex-row  h-min  items-center">
                    <div className="flex px-[9px] py-[5px] items-center   bg-InnerColor cursor-pointer  rounded-b-[15px]  border-b-0.5 border-l-0.5 border-r-0.5 border-t-0  border-solid  border-borderGreyLight  flex-none flex-col flex-no-wrap gap-0 h-min-content justify-center overflow-hidden  relative w-100 will-change-transform">
                        <p className="text-[11.5px] text-center hover:opacity-50  font-normal leading-[1em] text-white tracking-[0em]">
                            Switch Theme
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwitchTheme

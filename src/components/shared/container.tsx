import React, { ReactNode } from 'react'

const Container = ({
    children,
    style,
    title,
    subTitle,
    childStyle,
}: {
    children?: ReactNode
    style?: string
    title?: string
    childStyle?: string
    subTitle?: string | ReactNode
}) => {
    return (
        <div
            className={`flex ${style}  w-full h-full flex-row  bg-BoxesColor border-b-0.5 border-solid border-borderGreyLight flex-no-wrap items-start self-start gap-[10px]  justify-start justify-self-start overflow-visible p-0 relative border rounded-[10px] cursor-move z-[1px]`}
        >
            <div className="flex flex-col items-center content-center flex-no-wrap gap-0 h-full justify-start overflow-visible p-0  w-full">
                <div
                    className={`flex flex-row flex-no-wrap z-50 items-center content-center gap-[10px] min-h-min-content justify-center overflow-visible p-[10px] no-underline w-full`}
                >
                    <div className=" border-b-0.5 border-solid border-borderGreyLight w-full flex justify-between items-start  pb-[10px] ">
                        <span className="text-[11.5px] text-center hover:opacity-50  font-normal leading-[1em] text-white tracking-[0em]">
                            {title && title}
                        </span>
                        <span className="text-[11.5px] text-center hover:opacity-50  font-normal leading-[1em]  text-textLight tracking-[0em]">
                            {subTitle && subTitle}
                        </span>
                    </div>
                </div>
                <div
                    className={`flex ${childStyle}  w-full h-full flex-col items-start content-start flex-1 flex-grow-0 flex-shrink-0 gap-0 justify-start  p-0 `}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container

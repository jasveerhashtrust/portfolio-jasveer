import React from 'react'
import { ReactNode } from 'react'

const Button = ({ text , icon , onClickHandler}:{ text:string , icon:ReactNode , onClickHandler?:()=>void}) => {
  return (
    <button onClick={onClickHandler} className='items-center bg-InnerColor  min-w-[145px] flex flex-row rounded-[30px]  flex-no-wrap gap-0 h-min-content justify-start overflow-hidden  border-b-0.5  border-solid border py-[8px] px-[14px]  border-borderGreyLight  relative text-no-decoration"'>
      <div className='flex flex-row w-full justify-between items-center'>
        <span className='text-[11.5px] text-center hover:opacity-50  font-normal leading-[1em] text-white tracking-[0em]'>
         {
          text
         }
        </span>
          {
            icon && icon
          }
      </div>
      </button>
  )
}

export default Button
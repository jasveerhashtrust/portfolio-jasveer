import React from 'react';
import Container from './shared/container';
import Image from 'next/image';
import Button from './shared/button';
import Arrow from './icons/arrow';
import Line from './icons/line';
import X from './icons/x';
import LinkedIn from './icons/linked-in';
import Mail from './icons/mail';
import Bing from './icons/bing';

const MainWrapper = () => (
  <div className='grid grid-cols-6 grid-rows-5 gap-[22px] auto-rows-[165px] h-min justify-start overflow-visible relative w-full'>
    {renderMapContainer()}
    {renderAboutContainer()}
    {renderEducationContainer()}
    {renderProjectsContainer()}
    {renderGetInTochContainer()}
    <Container title='Newsletter' style='col-start-1 row-start-4' />
    <Container style='col-start-2 row-start-4' />
    <Container title='Latest Work' style='col-span-2 row-span-2 col-start-3 row-start-3' />
    {renderModeContainer()}
    <Container title='Side Projects' style='col-span-2 col-start-5 row-start-3' />
    <Container title='Year of Experience' style='col-start-5 row-start-4' />
    <Container title='CV' style='col-start-6 row-start-4' />
  </div>
);

const renderMapContainer = () => (
  <Container childStyle='absolute' style='w-full h-[155px]' subTitle='San Francisco' title='Location'>
    <Image src='/map.webp' width={0} height={0} alt='map' sizes='100vh' className='w-full rounded-[10px] h-full' />
  </Container>
);

const renderModeContainer = () => (
  <Container title='Mode' style='col-start-2 row-start-1'>
    <div className='flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full'>
      <p className='text-[11.5px] font-normal leading-[1.5em] text-white tracking-[0em]'>
        Available for freelance design projects. Hit me up for a collab 🦾
      </p>
      <Button text='Contact Me' icon={<Arrow />} />
    </div>
  </Container>
);

const renderAboutContainer =()=>(
    <Container childStyle='mt-auto' title='About' subTitle='Maximilian Stone' style='col-span-2 col-start-3 row-start-1' >
<div className='flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full'>
<p className='text-[11.5px] font-normal leading-[1.5em] text-white tracking-[0em]'>
I’m Maximilian Stone, an adventurous Creative Director based in the vibrant city of San Francisco. With a keen eye for aesthetics, a passion for innovation, and a drive for pushing boundaries, I strive to create visually captivating designs that leave a lasting impact. Let’s collaborate and bring your creative visions to life.
      </p>
</div>
    </Container>
)

const renderEducationContainer =()=>(
    <Container title='Experience & Education' style='col-span-2 row-span-2 col-start-5 row-start-1'>
        <div className='flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full'>
            <div className='flex flex-row  border-b-0.5 border-solid  border-borderGreyLight items-start justify-start gap-[20px] h-min-content relative py-[10px]'>
                <div className='flex w-full flex-row flex-wrap items-center justify-start gap-[5px] h-min-content overflow-visible relative p-0'>
                    <span className='text-[11.5px] text-center  font-normal leading-[1em]  text-textLight tracking-[0em]'>2022</span>
                    <Line/>
                    <span className='text-[11.5px] text-center font-normal leading-[1em]  text-textLight tracking-[0em]'>Nov</span>
                </div>
                <div className='flex flex-col flex-wrap items-start content-start justify-start gap-[4px]  h-min overflow-visible relative p-0'>
                  <p className='text-[11.5px] font-normal leading-[1em] text-white tracking-[0em]'>
                  Creative Studio Owner
                  </p>
                  <p className='text-[11.5px]  font-normal leading-[1em]  text-textLight tracking-[0em]'>
                  Self-employed at my own creative studio, delivering innovative design solutions and giving value to your brand experience.
                  </p>
                </div>
            </div>
            <div className='flex border-b-0.5 border-solid  border-borderGreyLight flex-row  items-start justify-start gap-[20px] h-min-content relative py-[10px]'>
                <div className='flex w-full flex-row flex-wrap items-center justify-start gap-[5px] h-min-content overflow-visible relative p-0'>
                    <span className='text-[11.5px] text-center  font-normal leading-[1em]  text-textLight tracking-[0em]'>2022</span>
                    <Line/>
                    <span className='text-[11.5px] text-center font-normal leading-[1em]  text-textLight tracking-[0em]'>Nov</span>
                </div>
                <div className='flex flex-col flex-wrap items-start content-start justify-start gap-[4px]  h-min overflow-visible relative p-0'>
                  <p className='text-[11.5px] font-normal leading-[1em] text-white tracking-[0em]'>
                  Creative Studio Owner
                  </p>
                  <p className='text-[11.5px]  font-normal leading-[1em]  text-textLight tracking-[0em]'>
                  Self-employed at my own creative studio, delivering innovative design solutions and giving value to your brand experience.
                  </p>
                </div>
            </div>
            <div className='flex border-b-0.5 border-solid  border-borderGreyLight flex-row  items-start justify-start gap-[20px] h-min-content relative py-[10px]'>
                <div className='flex w-full flex-row flex-wrap items-center justify-start gap-[5px] h-min-content overflow-visible relative p-0'>
                    <span className='text-[11.5px] text-center  font-normal leading-[1em]  text-textLight tracking-[0em]'>2022</span>
                    <Line/>
                    <span className='text-[11.5px] text-center font-normal leading-[1em]  text-textLight tracking-[0em]'>Nov</span>
                </div>
                <div className='flex flex-col flex-wrap items-start content-start justify-start gap-[4px]  h-min overflow-visible relative p-0'>
                  <p className='text-[11.5px] font-normal leading-[1em] text-white tracking-[0em]'>
                  Creative Studio Owner
                  </p>
                  <p className='text-[11.5px]  font-normal leading-[1em]  text-textLight tracking-[0em]'>
                  Self-employed at my own creative studio, delivering innovative design solutions and giving value to your brand experience.
                  </p>
                </div>
            </div>

        </div>

    </Container>
)


 const renderGetInTochContainer =()=>(
<Container  childStyle='mt-auto !justify-center !items-center' title='Get in touch' style='col-span-2 col-start-3 row-start-2'>
    <div className='flex justify-center gap-[25px] items-center  mx-[10px] mb-[20px] mt-[10px]'>
     <div className='flex  justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]'>
    <X/>
     </div>
     <div className=' flex justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]'>
    <LinkedIn/>
     </div>
     <div className=' flex justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]'>
   <Bing/>
     </div>
     <div className='flex justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]'>
   <Mail/>
     </div>
    </div>
</Container>
 )


const renderProjectsContainer =()=>(
  <Container title='Projects' style='col-span-2 row-span-2 col-start-1 row-start-2'>
    <div className='flex flex-col items-start justify-start gap-[10px] h-min-content relative w-full'>
<div className='flex items-center justify-start gap-[15px] h-min-content overflow-visible p-[10px] relative text-no-underline'>

</div>
</div>
</Container>
 )

export default MainWrapper;

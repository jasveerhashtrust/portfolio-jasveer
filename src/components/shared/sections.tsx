import Image from 'next/image'
import Button from './button'
import Container from './container'
import React from 'react'
import { ExperienceData, ProjectsData } from '@/constant/constant'
import Arrow from '../icons/arrow'
import Line from '../icons/line'
import X from '../icons/x'
import LinkedIn from '../icons/linked-in'
import Bing from '../icons/bing'
import Mail from '../icons/mail'
import Input from './input'
import { downloadPdf } from '@/helper/helper'

export const renderNewsletterContainer = () => (
    <Container
        childStyle="mt-auto"
        title="Newsletter"
        style="col-start-1 row-start-4"
    >
        <div className="flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full">
            <Input placeholder={'name@gmail.com'} />
            <Button text={'Sign Up'} />
        </div>
    </Container>
)

export const renderCvContainer = () => (
    <Container childStyle="mt-auto" title="CV" style="col-start-6 row-start-4">
        <div className="flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full">
            <Button text="View" icon={<Arrow />} />
            <Button
                onClickHandler={downloadPdf}
                text="Download"
                icon={<Arrow />}
            />
        </div>
    </Container>
)

export const renderExperienceContainer = () => (
    <Container
        childStyle="flex justify-center items-center"
        title="Year of Experience"
        style="col-start-5 row-start-4"
    >
        <p className="text-[105px] mt-5 w-full h-full flex justify-center items-center  font-normal leading-[.8em]  mb-0 tracking-[-.1em] text-white">
            2.1
        </p>
    </Container>
)

export const renderSideProjectsContainer = () => (
    <Container title="Education" style="col-span-2 col-start-5 row-start-3">
        <div className="flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full">
            <div className="flex flex-row items-start justify-start gap-[20px] h-min-content relative py-[10px]">
                <div className="flex  max-w-[27%] w-full  flex-row flex-wrap items-center justify-start gap-[5px] h-min-content overflow-visible relative p-0">
                    <span className="text-[11.5px] text-center  font-normal leading-[1em]  text-textLight tracking-[0em]">
                        2017
                    </span>
                    <Line />
                    <span className="text-[11.5px] text-center font-normal leading-[1em]  text-textLight tracking-[0em]">
                        2021
                    </span>
                </div>
                <div className="flex flex-col  flex-wrap items-start content-start justify-start gap-[4px]  h-min overflow-visible relative p-0">
                    <p className="text-[11.5px] font-normal leading-[1em] text-white tracking-[0em]">
                        Guru Nanak Dev Engineering College
                    </p>
                    <p className="text-[11.5px]  font-normal leading-[1em]  text-textLight tracking-[0em]">
                        Bachelor of Technology, Electronics and Communications
                        Engineering (7.4-CGPA)
                    </p>
                </div>
            </div>
        </div>
    </Container>
)

export const renderLatestWorkContainer = () => (
    <Container
        title="Latest Work"
        style="col-span-2 row-span-2 col-start-3 row-start-3"
    >
        <div className="object-cover ">
            <Image
                src="/mobile.webp"
                alt="mobile"
                width={1000}
                height={1000}
                className="w-full absoulte h-full"
            />
        </div>
    </Container>
)

export const renderMapContainer = () => (
    <Container childStyle={'absolute'} subTitle={'Gurgoan'} title={'Location'}>
        <Image
            src="/map.webp"
            width={0}
            height={0}
            alt="map"
            sizes="100vh"
            className="w-full h-full rounded-[15px]"
        />
    </Container>
)

export const Dot = () => (
    <div className="bg-redDot blink rounded-[50%] w-[8px] h-[8px] shadow-shadow"></div>
)

export const renderModeContainer = () => (
    <Container
        childStyle="mt-auto"
        title="Mode"
        subTitle={<Dot />}
        style="col-start-2 row-start-1"
    >
        <div className="flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full">
            <p className="text-[11.5px] font-normal leading-[1.5em] text-white tracking-[0em]">
                Available for freelance design projects. Hit me up for a collab
                🦾
            </p>
            <Button text="Contact Me" icon={<Arrow />} />
        </div>
    </Container>
)

export const renderAboutContainer = () => (
    <Container
        childStyle="mt-auto"
        title="About"
        subTitle="Maximilian Stone"
        style="col-span-2 col-start-3 row-start-1"
    >
        <div className="flex mt-auto flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full">
            <p className="text-[11.5px]  font-normal leading-[1.5em] text-white tracking-[0em]">
                Jasveer Singh, a skilled Full-stack Software Developer from
                Gurugram, excels in crafting user-friendly interfaces and robust
                backend solutions, aiming to transform your ideas into
                successful and impactful projects through collaborative efforts.
            </p>
        </div>
    </Container>
)

export const renderEducationContainer = () => (
    <Container
        title="Experience"
        style="col-span-2 lg:row-span-2  lg:col-start-5 lg:row-start-1"
    >
        <div className="flex mt-auto  flex-col items-start gap-[10px] min-h-min-content justify-start overflow-hidden p-[10px] relative w-full">
            {ExperienceData.map((data, index) => (
                <div
                    key={index}
                    className={`flex flex-row ${index === 2 ? 'border-none' : ' border-b-0.1 '} border-solid  border-borderLight items-start justify-start gap-[20px] h-min-content relative py-[10px]`}
                >
                    <div className="flex w-full flex-row flex-wrap items-center justify-start gap-[5px] h-min-content overflow-visible relative p-0">
                        <span className="text-[11.5px] text-center  font-normal leading-[1em]  text-textLight tracking-[0em]">
                            {data.from}
                        </span>
                        <Line />
                        <span className="text-[11.5px] text-center font-normal leading-[1em]  text-textLight tracking-[0em]">
                            {data.to}
                        </span>
                    </div>
                    <div className="flex max-w-[50%] flex-col flex-wrap items-start content-start justify-start gap-[4px]  h-min overflow-visible relative p-0">
                        <p className="text-[11.5px] font-normal leading-[1em] text-white tracking-[0em]">
                            {data.experienceTitle}
                        </p>
                        <p className="text-[11.5px] max-lines-3  font-normal  leading-[1em]  text-textLight">
                            {data.experienceDescription}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </Container>
)

export const renderGetInTochContainer = () => (
    <Container
        childStyle="mt-auto !justify-center !items-center"
        title="Get in touch"
        style="col-span-2 col-start-3 row-start-2"
    >
        <div className="flex mt-auto flex-row  items-center gap-[10px] min-h-min-content justify-center overflow-hidden p-[10px] relative w-full">
            <div className="flex  justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]">
                <X />
            </div>
            <div className=" flex justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]">
                <LinkedIn />
            </div>
            <div className=" flex justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]">
                <Bing />
            </div>
            <div className="flex justify-center items-center rounded-[50%] border-0.5 border-solid border-borderGreyLight  h-[60px] w-[60px]">
                <Mail />
            </div>
        </div>
    </Container>
)

export const renderProjectsContainer = () => (
    <Container
        childStyle="mt-auto"
        title="Projects"
        style="col-span-2 row-span-2 lg:col-start-1 row-start-2"
    >
        <div className="flex flex-col p-[10px] items-start justify-start gap-[10px] h-min-content relative w-full">
            {ProjectsData.map((data, index) => (
                <div
                    key={index}
                    className="flex items-center rounded-[15px] bg-boxLightShade justify-start gap-[15px] h-min-content w-full overflow-visible p-[10px] relative text-no-underline"
                >
                    <div className="block rounded-full object-center object-cover">
                        <Image
                            sizes="100vh"
                            alt="laptop"
                            width={80}
                            height={80}
                            className="rounded-full "
                            src="/laptop.webp"
                        />
                    </div>
                    <div className="flex gap-[4px]  w-full flex-col">
                        <span className="text-[11.5px] font-normal leading-[1em] text-white tracking-[0em]">
                            {data.projectName}
                        </span>
                        <span className="text-[11.5px] font-normal leading-[1em]  text-textLight tracking-[0em]">
                            {data.projectDescription}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </Container>
)

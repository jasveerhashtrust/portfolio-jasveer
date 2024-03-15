import React from 'react'
import Container from './shared/container'
import {
    RenderCvContainer,
    RenderAboutContainer,
    RenderEducationContainer,
    RenderExperienceContainer,
    RenderGetInTochContainer,
    RenderLatestWorkContainer,
    RenderMapContainer,
    RenderModeContainer,
    RenderProjectsContainer,
    RenderSideProjectsContainer,
    RenderNewsletterContainer,
} from './shared/sections'

const MainWrapper = () => (
    <div className="grid lg:grid-cols-6 grid-cols-4 grid-rows-6 lg:grid-rows-4 gap-[22px] auto-rows-[165px] h-min justify-start overflow-visible relative w-full">
        <RenderMapContainer />
        <RenderAboutContainer />
        <RenderEducationContainer />
        <RenderProjectsContainer />
        <RenderGetInTochContainer />
        <RenderNewsletterContainer />
        <Container style="col-start-2 row-start-4" />
        <RenderLatestWorkContainer />
        <RenderModeContainer />
        <RenderSideProjectsContainer />
        <RenderExperienceContainer />
        <RenderCvContainer />
    </div>
)

export default MainWrapper

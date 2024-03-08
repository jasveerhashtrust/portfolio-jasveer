import React from 'react'
import Container from './shared/container'
import {
    renderCvContainer,
    renderAboutContainer,
    renderEducationContainer,
    renderExperienceContainer,
    renderGetInTochContainer,
    renderLatestWorkContainer,
    renderMapContainer,
    renderModeContainer,
    renderProjectsContainer,
    renderSideProjectsContainer,
    renderNewsletterContainer,
} from './shared/sections'

const MainWrapper = () => (
    <div className="grid lg:grid-cols-6  grid-cols-4 grid-rows-6  lg:grid-rows-4 gap-[22px] auto-rows-[165px] h-min justify-start overflow-visible relative w-full">
        {renderMapContainer()}
        {renderAboutContainer()}
        {renderEducationContainer()}
        {renderProjectsContainer()}
        {renderGetInTochContainer()}
        {renderNewsletterContainer()}
        <Container style="col-start-2 row-start-4" />
        {renderLatestWorkContainer()}
        {renderModeContainer()}
        {renderSideProjectsContainer()}
        {renderExperienceContainer()}
        {renderCvContainer()}
    </div>
)

export default MainWrapper

"use client"

import styled from 'styled-components'
import Header from '@/components/Header'
import MainContainer from '@/components/MainContainer'
import { BioSection } from '@/components/BioSection'
import { ProjectsSection } from '../components/ProjectsSection'

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <MainContainer />
      <BioSection />
      <ProjectsSection />
    </AppContainer>
  )
}

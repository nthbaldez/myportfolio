"use client"

import styled from 'styled-components'
import Header from '@/components/Header/Header'
import MainContainer from '@/components/MainContainer/MainContainer'
import { BioSection } from '@/components/BioSecton/BioSection'
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection'

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

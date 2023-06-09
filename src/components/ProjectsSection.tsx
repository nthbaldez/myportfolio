// "use client"
import { useEffect, useState } from "react"
import styled from "styled-components"

const ProjectsSectionContainer = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem 4rem;
  width: 80%;

  > h2 {
    color: var(--orange-400);
    padding: 1rem;
    font-size: 3rem;
    margin: 2rem;
  }
`
const ProjectsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 200px;
  gap: 5rem;

`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 3rem 4rem;
  border: 1px solid rgb(60, 60, 60);
  border-radius: 0.5rem;

  h2 {
    font-size: 1rem;
    color: var(--orange-400);
  }

`
interface Repo {
  name: string;
  description: string;
  url: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export function ProjectsSection() {

  const [ repos, setRepos ] = useState<Repo[]>([])

  useEffect(() => { 
    fetch("http://localhost:3000/api/getProducts")
    .then(response => response.json())
    .then(data => setRepos(data))
  }, []);

  return (
    <ProjectsSectionContainer>
      <h2>Projetos</h2>
      <ProjectsListContainer>
        {repos.map(repo => 
        <Card key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
        </Card>)}
      </ProjectsListContainer>
    </ProjectsSectionContainer>
  )

  
}



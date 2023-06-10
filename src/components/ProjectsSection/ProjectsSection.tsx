import { useEffect, useState } from "react"
import { Card, ProjectsListContainer, ProjectsSectionContainer } from "./styles";

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
    fetch("http://localhost:3000/api/getProjects")
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



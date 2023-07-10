import { useEffect, useState } from "react"
import { Card, ProjectsListContainer, ProjectsSectionContainer } from "./styles";
import { BsGithub } from "react-icons/bs";

interface TopicProps {
  node: {
    topic: {
      id: string;
      name: string;
    }
  }
}

interface Repo {
  name: string;
  description: string;
  url: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  repositoryTopics: {
    edges: TopicProps[]
  }
}

const iconsStyles = {
  color: "white",
  fontSize: "24px"
}

export function ProjectsSection() {

  const [ repos, setRepos ] = useState<Repo[]>([])

  useEffect(() => { 
    fetch("/api/getProjects")
    .then(response => response.json())
    .then(data => setRepos(data))
  }, []);

  return (
    <ProjectsSectionContainer>
      <h2 id="projects">Projetos</h2>
      <ProjectsListContainer>
        {repos.map(repo => 
        <Card key={repo.name} href={repo.url} target="_blank">
          <header>
            <h2>{repo.name}</h2>
            <BsGithub style={iconsStyles}/>
          </header>
          <p>{repo.description}</p>
          <footer>
            {repo.repositoryTopics.edges.map(edge => 
              <span key={edge.node.topic.id}>{edge.node.topic.name}</span>  
            )}
          </footer>
        </Card>)}
      </ProjectsListContainer>
    </ProjectsSectionContainer>
  )
}

import styled from "styled-components"

export const ProjectsSectionContainer = styled.section`
  color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem 4rem;

  > h2 {
    color: var(--orange-400);
    padding: 1rem;
    font-size: 3rem;
    margin: 2rem;
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 80%;
  }
`
export const ProjectsListContainer = styled.div`
  height: 100vh;

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
    gap: 2rem;
  }
  
`

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid rgb(60, 60, 60);
  border-radius: 0.5rem;
  
  transition: transform 0.2s;
  
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    h2 {
      font-size: 1rem;
      color: var(--orange-400);
    }
  }

  footer {
    margin-top: 2rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    span {
      background-color: var(--gray-200);
      padding: 8px;
      text-align: center;
      border-radius: 16px;
      color: #000;
    }
  }

  @media (min-width: 768px) {
    height: 280px;
    width: 100%;
  }

  @media (min-width: 320px) {
    width: 100%;
  }

`

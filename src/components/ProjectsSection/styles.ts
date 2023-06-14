import styled from "styled-components"

export const ProjectsSectionContainer = styled.section`
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
export const ProjectsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 200px;
  gap: 7rem;
`

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid rgb(60, 60, 60);
  border-radius: 0.5rem;
  height: 280px;
  transition: transform 0.2s;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.025);
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

`

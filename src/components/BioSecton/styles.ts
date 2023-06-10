import styled from "styled-components"

export const BioContainer = styled.section`
  color: #fff;
  width: 80%;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  height: 500px;

  div + div {
    display: flex;
    flex-direction: column;
    text-align: justify;
    
    gap: 2rem;
    max-width: 600px;
    height: 100%;

    h2 {
      color: var(--orange-400);
      background-clip: text;
      text-align: center;
    }

    p {
      color: var(--gray-300);
      line-height: 2rem;
      font-weight: 400;
      font-size: 1.375rem;
    }
  } 

  img {
    max-width: 400px;
    height: auto;

    border-radius: 100%;
  }

  button {
    color: white;
  }
`

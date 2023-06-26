import styled from "styled-components"

export const SectionIntroductionContainer = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
  padding: 6rem 2rem;

  > div {
    display: flex;
    justify-content: center;
  }

  button {
    background: transparent;
    border: none;
    border-radius: 100%;
    font-size: 3rem;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    margin: 40px auto;

    &:hover {
      background: rgba(97, 96, 96, 0.568);
    }

    svg {
      color: white;
    }

  }


  animation: fade-in 3s;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }

`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  a {
    padding: 0.875rem;
  }
`

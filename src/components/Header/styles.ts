import styled from "styled-components"

export const HeaderContainer = styled.div`
  padding: 4rem 4rem;
  color: #fff; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      text-transform: uppercase;

      a {
        position: relative;
        padding: 1rem;
        border: none;
        box-shadow: none;
        border-radius: 4px;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
        }

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0px;
          width: 0;
          height: 2px;
          background-color: #E2E8F0;
          transition: 0.3s;
        }

        &:hover:after {
          width: 100%;
        }
      }
    }
  }
`

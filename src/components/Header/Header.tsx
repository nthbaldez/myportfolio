import { HeaderContainer } from "./styles";

export default function Header() {

  const takeTotheNextSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({block: "center", behavior: "smooth"});
  }

  return (
    <HeaderContainer>
        <nav>
          <ul>
            <li>
              <a onClick={() => takeTotheNextSection('profile')}>
                Sobre
              </a>
            </li>
            {/* <li>
              <a href="#experience">
                Experiência
              </a>
            </li> */}
            <li>
              <a href="#projects">
                Projetos
              </a>
            </li>
          </ul>
        </nav>
    </HeaderContainer>
  )
}

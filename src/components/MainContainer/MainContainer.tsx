
import WriterMachine from "../WriterMachine/WriterMachine";
import logo from '../../assets/logo.svg';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { TfiLinkedin, TfiEmail } from 'react-icons/tfi';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { SectionIntroductionContainer, SocialMediaContainer } from "./styles";

const iconsStyles = {
  color: "white",
  fontSize: "3rem"
}

export default function MainContainer() {

  const takeTotheNextSection = () => {
    const element = document.getElementById('profile');
    element?.scrollIntoView({block: "center", behavior: "smooth"});
  }

  return (
    <SectionIntroductionContainer>
      <div>
        <Image src={logo} alt="Logo de Nathan Baldez" />
      </div>
      <WriterMachine textProps="Software Developer"/>
      <SocialMediaContainer>
        <a href="mailto:nathanbsb2@hotmail.com">
          <TfiEmail style={iconsStyles}/>
        </a>
        <a href="https://www.github.com/nthbaldez">
          <BsGithub style={iconsStyles}/>
        </a>
        <a href="https://www.linkedin.com/in/nathan-baldez-380684197/">
          <TfiLinkedin style={iconsStyles}/>
        </a>

        <a href="https://www.instagram.com/nthbaldez/">
          <FiInstagram style={iconsStyles}/>
        </a>
      </SocialMediaContainer>

      <button onClick={() => takeTotheNextSection()}>
        <MdKeyboardDoubleArrowDown />
      </button>
    </SectionIntroductionContainer>
  )
}

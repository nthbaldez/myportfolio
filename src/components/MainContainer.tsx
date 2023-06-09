"use client"

import styled from "styled-components"
import WriterMachine from "./WriterMachine";
import logo from '../assets/logo.svg';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { TfiLinkedin, TfiEmail } from 'react-icons/tfi';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const SectionIntroductionContainer = styled.section`
  width: 100%;
  height: 100vh;
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

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  a {
    padding: 0.875rem;
  }
`

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

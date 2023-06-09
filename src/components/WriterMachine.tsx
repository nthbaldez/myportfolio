"use client"

import styled from "styled-components";
import Typewriter from 'typewriter-effect';

interface WriterMachineProps {
  textProps: string;
}

const WriterMachineContainer = styled.div`
  color: #E2E8F0;
  letter-spacing: 10px;
  
  h2 {
    font-weight: 200;
    font-size: 2rem;
  }
`

export default function WriterMachine({ textProps }: WriterMachineProps) {

  const typeWriterOptions = {
    strings: [textProps],
    autoStart: true,
    loop: true,
  }

  return (
    <WriterMachineContainer>
      <h2>
        <Typewriter
          options={typeWriterOptions}
        />
      </h2>
    </WriterMachineContainer>
  )
}

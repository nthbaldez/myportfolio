import Typewriter from 'typewriter-effect';
import { WriterMachineContainer } from './styles';

interface WriterMachineProps {
  textProps: string;
}

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

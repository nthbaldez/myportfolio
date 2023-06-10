import Image from 'next/image';
import { BioContainer } from './styles';

export function BioSection() {
  return (
    <BioContainer>
      <div>
        <Image
          alt="Foto de perfil de Nathan Baldez"
          src="/perfil.jpg" 
          width={400}
          height={400}
        />
      </div>
      <div id="profile">
        <h2>Sobre o Nathan Baldez</h2>
        <p>
          Brasiliense, nascido em 1993.<br></br> Desde que conheci o mundo da programação, em meados de 2020, fiquei fascinado com a possibilidade de criar soluções para problemas reais do dia-a-dia por meio da programação. Sou formado em Análise e Desenvolvimento de Sistemas. Movido pelos constantes desafios que acarretam o Desenvolvimento Web, seja no Front-end como no Back-end. Além disso, apaixonado por música, sendo multi-instrumentista e artista nas horas vagas. Praticante de Calistenia e simpatizante de longos anos do skate. 
        </p>
      </div>
    </BioContainer>
  )
}

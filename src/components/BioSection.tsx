"use client"

import styled from "styled-components"

import Image from 'next/image';

const BioContainer = styled.section`
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

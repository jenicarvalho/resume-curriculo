import React from "react";

import {
  ProfileImage,
  Biography,
  Occupation,
  Title,
  ProfessionalProfile
} from "./style";
import perfil from "../../images/perfil-jeniffer.jpg";

export default function Header() {
  return (
    <>
      <ProfileImage>
        <img src={perfil} alt="Perfil Jeniffer Carvalho" />
      </ProfileImage>
      <Biography>
        <h1>
          Jeniffer F. <br /> Carvalho
        </h1>
        <Occupation>Front End Developer</Occupation>
        <p>29 anos e mãe de 2 gatos.</p>
      </Biography>

      <Title>
        Perfil <br /> Profissional
      </Title>

      <ProfessionalProfile>
        <p>
          Trabalho com desenvolvimento desde 2014. Gosto de descobrir e testar
          tecnologias novas, tenho mente aberta e sou curiosa para tudo que
          envolve programação e tecnologia. Já atuei como full stack, já
          trabalhei com Wordpress, mas o que faz meu olho brilhar é a tríade:{" "}
          <strong>HTML, CSS e JS.</strong> Atualmente estou apaixonada por
          React.
        </p>
      </ProfessionalProfile>
    </>
  );
}

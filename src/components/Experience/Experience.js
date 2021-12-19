import React from "react";

import { ExperienceContainer, ExperienceItem } from "./style";

export default function Experience() {
  return (
    <ExperienceContainer>
      <h2>Experiência Profissional</h2>

      <ExperienceItem>
        <div>
          <h4>Arquiteta <br />Front End React</h4>
          <date>Devereiro 2021 - Atualmente</date>

          <strong>BairesDev</strong>
          <span>Estados Unidos - Remoto</span>
        </div>
        <p>
        Coordeno o desenvolvimento front end dentro dos times.
        Atuo na tomada de decisão de tecnologias e ferramentas focando em performance e entregas de valor.
        </p>
      </ExperienceItem>
      <ExperienceItem>
        <div>
          <h4>Front End React</h4>
          <date>Março 2020 - Fevereiro 2021</date>

          <strong>Matera</strong>
          <span>Campinas - São Paulo</span>
        </div>
        <p>
          Criação de sistemas bancários e financeiros com ReactJS, Typescript, Redux e Sagas.
        </p>
      </ExperienceItem>

      <ExperienceItem>
        <div>
          <h4>Instrutora React</h4>
          <date>Março - Abril</date>

          <strong>Woman Can Code | Share RH</strong>
          <span>Campinas - São Paulo</span>
        </div>
        <p>
          Dei aula de React e Javascript para uma turma de aproximadamente 20 mulheres. Foi um curso intensivo de 30 dias, de Segunda à Sábado. Pude botar em prática a minha didática e repassar o conhecimento obtido ao longo dos últimos 6 anos de carreira.
        </p>
      </ExperienceItem>
      <ExperienceItem>
        <div>
          <h4>Front End React</h4>
          <date>Setembro 2019 - Março 2020</date>

          <strong>SysMap | Kroton</strong>
          <span>Valinhos - São Paulo</span>
        </div>
        <p>
          Criação de sistemas com ReactJS, desenvolvimento de uma biblioteca
          para uso interno. Desenvolvimento guiado por testes unitários usando
          para isso Jest e Enzyme.
        </p>
      </ExperienceItem>

      <ExperienceItem>
        <div>
          <h4>Front End</h4>
          <date>Dezembro 2018 - Agosto 2019</date>

          <strong>Tecnologia 2U</strong>
          <span>Paulínia - São Paulo</span>
        </div>
        <p>
          Atuei com o desenvolvimento Front End dos sistemas e sites da empresa.
          Uso Bootstrap, jQuery, Flex e Grid para construção dos layouts. Faço
          também melhorias de UI e UX.
        </p>
      </ExperienceItem>
      <ExperienceItem>
        <div>
          <h4>Front End</h4>
          <date>Outubro 2016 - Dezembro 2018</date>

          <strong>Princi Web</strong>
          <span>Campinas - São Paulo</span>
        </div>
        <p>
          Trabalhei no desenvolvimento de Web Sites institucionais utilizando
          Bootstrap. Utilizei o CMS Wordpress para usar como back end dos sites.
          Desenvolvi temas e plugins para Wordpress do zero.
        </p>
      </ExperienceItem>
      <ExperienceItem>
        <div>
          <h4>Full Stack</h4>
          <date>Março 2015 - Atualmente</date>

          <strong>Agência Pixels</strong>
          <span>Hortolândia - São Paulo</span>
        </div>
        <p>
          Empresa própria que presta serviço terceirizado de desenvolvimento de
          sites para agências de publicidade em todo o Brasil. Construo sites e
          e-commerces em Wordpress.
        </p>
      </ExperienceItem>
      <ExperienceItem>
        <div>
          <h4>Full Stack</h4>
          <date>Outubro 2014 - Março 2015</date>

          <strong>Tecnologia 2U</strong>
          <span>Paulínia - São Paulo</span>
        </div>
        <p>
          Atuei com desenvolvimento de sites e sistemas. Construí o back end do
          zero com PHP e MySQL. Desenvolvi o front end dos sites utilizando o
          Framework Bootstrap.
        </p>
      </ExperienceItem>
    </ExperienceContainer>
  );
}

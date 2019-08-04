import React from "react";

import { ExperienceContainer, ExperienceList, ExperienceItem } from "./style";

export default function Experience() {
  return (
    <ExperienceContainer>
      <h2>Experiência Profissional</h2>

      <ExperienceList>
        <ExperienceItem>
          <div>
            <h4>Front End</h4>
            <date>Dezembro 2018 - Atualmente</date>

            <strong>Tecnologia 2U</strong>
            <span>Paulínia - São Paulo</span>
          </div>
          <p>
            Atuo com o desenvolvimento Front End dos sistemas e sites da
            empresa. Uso Bootstrap, jQuery, Flex e Grid para construção dos
            layouts. Faço também melhorias de UI e UX.
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
            Bootstrap. Utilizei o CMS Wordpress para usar como back end dos
            sites. Desenvolvi temas e plugins para Wordpress do zero.
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
            Empresa própria que presta serviço terceirizado de desenvolvimento
            de sites para agências de publicidade em todo o Brasil. Construo
            sites e e-commerces em Wordpress.
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
            Atuei com desenvolvimento de sites e sistemas. Construí o back end
            do zero com PHP e MySQL. Desenvolvi o front end dos sites utilizando
            o Framework Bootstrap.
          </p>
        </ExperienceItem>
      </ExperienceList>
    </ExperienceContainer>
  );
}
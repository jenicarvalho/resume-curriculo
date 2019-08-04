import styled from "styled-components";

export const ExperienceContainer = styled.div`
  margin: 50px;

  h2 {
    position: relative;
    color: #2b2b30;
    font-size: 19px;
    text-transform: uppercase;
    border-bottom: 2px solid;
    padding-bottom: 5px;
    margin-bottom: 30px;

    &::after {
      position: absolute;
      content: "";
      padding: 3px 65px;
      background: #2b2b30;
      bottom: -4px;
      left: 0px;
    }
  }
`;

export const ExperienceItem = styled.div`
  display: flex;

  div {
    flex-basis: 40%;
    border-right: 2px solid #2b2b30;
  }

  p {
    border-bottom: 2px solid #2b2b30;
    flex-basis: 80%;
    padding: 20px;
    line-height: 25px;
    text-align: justify;
  }

  h4 {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  date,
  span {
    display: block;
    margin-bottom: 20px;
    padding-bottom: 20px;
    font-size: 14px;
  }

  span {
    border-bottom: 2px solid #2b2b30;
  }

  strong {
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

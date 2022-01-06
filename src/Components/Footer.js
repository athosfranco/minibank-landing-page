import React from "react";
import styled from "styled-components";
import { FooterInnerLayout } from "../styles/Layouts";
import logo from "../img/logo.svg";

function Footer() {
  return (
    <FooterStyled>
      <FooterInnerLayout>
        <div className="footer-con">
          <div className="logo-con">
            <div className="logo-items">
              <img src={logo} alt="" />
              <p>
                Copyright @2021 Minibank. <br />
                Todos os direitos reservados.
              </p>
            </div>
          </div>
          <ul className="botton-nav">
            <div className="links1">
              <li>
                <a href="#">Equipe</a>
              </li>
              <li>
                <a href="#">Notícias</a>
              </li>
              <li>
                <a href="#">Cobrança</a>
              </li>
            </div>
            <div className="links2">
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <li>
                <a href="#">Afiliados</a>
              </li>
            </div>
            <div className="links3">
              <li>
                <a href="#">Termos de uso</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
            </div>
          </ul>
        </div>
        <a href="https://github.com/athosfranco" target="_blank">
          <p className="made-by">Feito com ❤ por Athos Franco</p>
        </a>
      </FooterInnerLayout>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  padding: 0 5rem;
  background-color: #dce2f0;
  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 3rem 2rem;
  }
  .footer-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }

  .logo-con {
    display: flex;
    align-items: center;
    img {
      width: 90px;
    }
  }

  .botton-nav {
    display: flex;
    justify-content: space-between;
    li {
      padding: 2rem 0;
      color: #16194f;
    }
    @media screen and (max-width: 900px) {
      flex-direction: column;
      li {
        padding: 1rem 0;
      }
    }
  }
  .made-by {
    margin-top: 30px;
    text-align: center;
  }
`;

export default Footer;

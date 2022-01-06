import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">Um cartão moderno, gratuito, prático e internacional</h2>
            <p>
              Facilidade e segurança para você em mais de 30 milhões de estabelecimentos, além dos benefícios
              Mastercard.
            </p>
          </div>
          <div className="card-right">
            <img className="card-img" src={card} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
      h2 {
        font-size: 2.5rem;
      }
    }

    .card-right {
      display: flex;
      justify-content: flex-end;
      img {
        filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));
      }
      @media screen and (max-width: 900px) {
        justify-content: flex-start;
      }
    }

    .card-left {
      p {
        padding: 1rem 0;
      }
    }

    .card-img {
      @media screen and (max-width: 845px) {
        width: 90%;
      }
    }
  }
`;

export default CardSection;

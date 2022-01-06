import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";
import chart from "../img/chart.svg";
import AnimatedButton from "./AnimatedButton";
import { Bounce, Roll } from "react-reveal";

function ChartSection() {
  return (
    <ChartStyled>
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name={"Saldo Bancário"} amount={"$850"} />
                <ChartStats name={"Última Transação "} amount={"$1,000"} />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">Nós te ajudamos a ter controle na sua vida financeira</h2>
            <Roll right>
              <p>
                Muitas ferramentas e conteúdo para você encontrar a melhor forma de cuidar do seu dinheiro e começar a
                realizar seus sonhos.
              </p>
            </Roll>
            <Bounce right>
              <AnimatedButton name={"Saiba mais"} />
            </Bounce>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
}

const ChartStyled = styled.section`
  .chart-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .chart-left {
      width: 80%;
      @media screen and (max-width: 1347px) {
        width: 100%;
      }
      .stats {
        img {
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 62px;
          width: 100%;
          @media screen and (max-width: 845px) {
            width: 300px;
          }
        }
        .stats-money {
          display: flex;
          padding-bottom: 1.3rem;
          justify-content: space-between;
          @media screen and (max-width: 845px) {
            flex-direction: column;
          }
        }
      }
    }

    .chart-right {
      padding-left: 2rem;
      p {
        padding: 1.3rem 0;
      }
      @media screen and (max-width: 845px) {
        padding-left: 0;
      }
    }
  }
`;

export default ChartSection;

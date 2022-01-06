import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import questions from "../questions";
import Question from "./Question";
function FAQSection() {
  return (
    <FaqStyled>
      <InnerLayout>
        <h3 className="small-heading">
          Perguntas <span>Frequentes</span>
        </h3>
        <p className="c-para">
          Está meio perdido? As perguntas mais frequentes dos nossos clientes foram respondidas abaixo. Caso ainda
          esteja com dúvida, entre em contato conosco!
        </p>

        <div className="questions-con">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </InnerLayout>
    </FaqStyled>
  );
}

const FaqStyled = styled.section`
  .c-para {
    width: 60%;
    margin: 0 auto;
    @media screen and (max-width: 689px) {
      width: 90%;
      margin-top: 20px;
    }
  }
  .questions-con {
    padding-top: 4rem;
  }

  }
`;

export default FAQSection;

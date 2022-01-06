import styled from "styled-components";

export const OuterLayout = styled.section`
  max-width: 100vw;
  padding: 5rem 18rem;
  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 2rem;
  }
`;
export const InnerLayout = styled.section`
  padding: 8rem 0;
  @media screen and (max-width: 990px) {
    padding: 4rem 0;
  }
`;

export const FooterInnerLayout = styled.section`
  padding: 8rem 0;
  @media screen and (max-width: 990px) {
    padding: 1rem 0;
  }
`;

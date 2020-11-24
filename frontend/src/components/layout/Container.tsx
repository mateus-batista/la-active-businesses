import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  justify-content: stretch;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px calc(100vh - 100px) 50px;
  grid-template-areas:
    "header header header header"
    "main main main main"
    "footer footer footer footer";
`;

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  /* display: grid; */
  /* grid-template-columns: 9rem 1fr; */
  /* grid-template-rows: auto 1fr; */
  height: 100dvh;
  
  /* @media (min-width: 992px) {
    grid-template-columns: 26rem 1fr;
  } */
`;

const AppContainer = styled.div`
  /* overflow-y: scroll; */
  margin-left: 7rem;
  overflow-x: hidden;
  
  @media (min-width: 992px) {
    margin-left: 26rem;
  }

`

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 1.8rem 6.4rem;
  overflow-x: auto;
  min-height: calc(100dvh - 6.1rem);

  @media (min-width: 992px) {
    padding: 4rem 4.8rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <AppContainer>
          <Header />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </AppContainer>
    </StyledAppLayout>
  );
}

import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
// import Uploader from "../data/Uploader"

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: fixed;
  width: 7rem;
  height: 100%;

  @media (min-width: 992px) {
    padding: 3.2rem 2.4rem;
    width: 26rem;
  }
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

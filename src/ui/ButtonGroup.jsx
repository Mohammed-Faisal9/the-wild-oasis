import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: start;

  @media (min-width: 992px) {
    justify-content: flex-end;

  }
`;

export default ButtonGroup;

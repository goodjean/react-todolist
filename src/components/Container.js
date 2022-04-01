import styled from "styled-components";

const ContainerBox = styled.div`
  background-color: #ffc8cd;
  width: 400px;
  height: 500px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 0 8px #803232;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

// presentation container
function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;

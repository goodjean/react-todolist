import styled from "styled-components";

const ContainerBox = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poor+Story&display=swap");
  background-color: #ffc8cd;
  width: 400px;
  height: 500px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 0 8px #853c3c;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;

  font-family: "Pangolin", sans-serif;
`;

// presentation container
function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;

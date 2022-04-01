import Date from "./Date";
import styled from "styled-components";
const HeaderBox = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 22px;
  padding-left: 22px;

  h2 {
    margin: 0;
    font-size: 22px;
    text-align: center;
  }
`;

// 제목, 날짜, 할 일 수량
function Header() {
  return (
    <HeaderBox>
      <h2>Todolist</h2>
      <Date />
    </HeaderBox>
  );
}

export default Header;

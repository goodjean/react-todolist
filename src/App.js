import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import FormAndListContainer from "./components/FormAndListContainer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  return (
    <Container>
      <Header />
      <FormAndListContainer>
        <TodoForm />
        <TodoList />
      </FormAndListContainer>
    </Container>
  );
}

export default App;

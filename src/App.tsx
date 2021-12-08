import { Container, Title, Nav, Header, Link } from "./AppStyled";
import { Route, Switch } from "react-router-dom";
import UseLocalStorage from "./routes/UseLocalStorage";
import UseHover from "./routes/useHover";
import UseRouter from "./routes/UseRouter";

function App() {
  return (
    <Container>
      <Header>
        <Title>Hooks</Title>
        <Nav>
          <Link to="/use-local-storage">useLocalStorage</Link>
          <Link to="/use-hover">useHover</Link>
          <Link to="/use-router/UUID">useRouter</Link>
        </Nav>
      </Header>
      <Switch>
        <Route path="/use-local-storage">
          <UseLocalStorage />
        </Route>
        <Route path="/use-hover">
          <UseHover />
        </Route>
        <Route path="/use-router/:id">
          <UseRouter />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

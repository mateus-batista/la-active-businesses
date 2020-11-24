/** @jsx jsx */
import { ApolloProvider } from "@apollo/client";
import { jsx } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/layout/Container";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { client } from "./config/client";
import { routes } from "./config/routes";

function App() {
  return (
    <Container>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Main>
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </Main>
          <Footer />
        </Router>
      </ApolloProvider>
    </Container>
  );
}

export default App;

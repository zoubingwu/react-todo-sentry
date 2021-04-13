import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "todomvc-app-css/index.css";
import * as Sentry from "@sentry/react";

import Footer from "./components/Footer";
import TodoList from "./containers/TodoList";
import { history } from "./history";


const throwSomething = () => {
  throw new Error('Test Error')
}

function App() {
  return (
    <Sentry.ErrorBoundary fallback={"An error has occurred"} showDialog>
      <Router history={history}>
        <div className="todoapp">
          <Switch>
            <Route path="/:filter?" children={<TodoList />} />
          </Switch>
          <button onClick={throwSomething}>Break the world</button>;
          <Footer />
        </div>
      </Router>
    </Sentry.ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);

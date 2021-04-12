import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "todomvc-app-css/index.css";
import * as Sentry from "@sentry/react";

import Footer from "../components/Footer";
import TodoList from "../containers/TodoList";

const throwSomething = () => {
  throw new Error('Test Error')
}

function FallbackComponent() {
  return (
    <div>An error has occured</div>
  )
}

function App() {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <HashRouter>
        <React.Fragment>
          <div className="todoapp">
            <Route path="/:filter?" component={TodoList} />
          </div>
          <button onClick={throwSomething}>Break the world</button>;
        <Footer />
        </React.Fragment>
      </HashRouter>
    </Sentry.ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);

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
    <HashRouter>
      <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
        <React.Fragment>
          <div className="todoapp">
            <Route path="/:filter?" component={TodoList} />
          </div>
          <button onClick={throwSomething}>Break the world</button>;
        <Footer />
        </React.Fragment>
      </Sentry.ErrorBoundary>
    </HashRouter>
  );
}

export default Sentry.withProfiler(App);

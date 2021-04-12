import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "todomvc-app-css/index.css";

import Footer from "../components/Footer";
import TodoList from "../containers/TodoList";

const throwSomething = () => {
  throw new Error('Test Error')
}

export default function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <div className="todoapp">
          <Route path="/:filter?" component={TodoList} />
        </div>
        <button onClick={throwSomething}>Break the world</button>;
        <Footer />
      </React.Fragment>
    </HashRouter>
  );
}

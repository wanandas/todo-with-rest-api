import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/TodoPage";

export interface ITodoState {
  createdAt?: string;
  description: string;
  title: string;
  updatedAt?: string;
  user_id?: string;
  _id: string;
}
function App() {
  const [token, setToken] = useState(
    localStorage.getItem("access-token") || ""
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token ? <TodoPage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {!token ? <LoginPage setToken={setToken} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

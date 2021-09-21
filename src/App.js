import "./styles.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Pomodoro from "./components/timer";
import JustTime from "./components/justTime";
export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/pomodoro" className="link pomodoro"></Link>
            </li>
            <li>
              <Link to="/time" className="link">
                Just Time
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/pomodoro">
            <Pomodoro min="25" second="0" breakTime="4" />
          </Route>
          <Route path="/time">
            <JustTime />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

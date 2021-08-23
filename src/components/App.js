import '../styles/App.css';
import CardBoard from "./Pages/CardBoard/CardBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={CardBoard} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
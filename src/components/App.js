import '../styles/App.css';
import CardBoard from "../components/views/CardBoard/CardBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "../components/views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={CardBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
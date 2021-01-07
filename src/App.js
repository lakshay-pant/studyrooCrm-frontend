import {EntryPage} from "./pages/entry/Entry.page";
import './App.css';
import "./components/Fontawesomeicons"
import {Dashboard} from "../src/pages/dashboard/Dashboard.page"
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

function App() {
  return( 
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
        <EntryPage/>
        </Route>
        <Route path="/dashboard">
        <Dashboard/>
        </Route>
        </Switch>
      </Router>
      </div>
  
  )}

export default App;

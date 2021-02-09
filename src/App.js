import {EntryPage} from "./pages/entry/Entry.page";
import './App.css';
import "./components/Fontawesomeicons"
import {Dashboard} from "../src/pages/dashboard/Dashboard.page"
import {DefaultLayout} from "./layout/DefaultLayout"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import {PrivateRoute} from "./components/private-route/PrivateRoute.comp"
import { Registration } from "./pages/registeration/Registeration.page";

function App() {
  return( 
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
        <EntryPage/>
        </Route>
        <Route exact path="/registration">
            <Registration />
          </Route>
        <PrivateRoute path="/dashboard">
        <Dashboard/>
        </PrivateRoute>
        </Switch>
    </Router>
      </div>
  
  )}

export default App;

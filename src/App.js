import {EntryPage} from "./pages/entry/Entry.page";
import './App.css';
import "./components/Fontawesomeicons"
import {Dashboard} from "../src/pages/dashboard/Dashboard.page"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import {PrivateRoute} from "./components/private-route/PrivateRoute.comp"
import { Registration } from "./pages/registeration/Registeration.page";
import {NewStudent} from "./pages/newStudent/newStudent.page";
import {StudentOverview} from "./pages/studentOverview/studentOverview.page"
import {useHistory} from "react-router-dom"


function App() {

  const history=useHistory()
  return( 

    <div className="App">
    <Router history={history} >
      <Switch>
        <Route exact path="/">
        <EntryPage/>
        </Route>
        <Route  path="/registration">
            <Registration />
          </Route>
        <PrivateRoute  path="/dashboard">
        <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/add-student">
        <NewStudent/>
        </PrivateRoute>
        <PrivateRoute path="/student-overview">
        <StudentOverview/>
        </PrivateRoute>
        
        </Switch>
    </Router>
      </div>
  
  )}

export default App;

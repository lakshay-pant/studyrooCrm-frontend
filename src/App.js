import {EntryPage} from "./pages/entry/Entry.page";
import './App.css';
import "./components/Fontawesomeicons"
import {Dashboard} from "../src/pages/dashboard/Dashboard.page"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import {PrivateRoute} from "./components/private-route/PrivateRoute.comp"
import { Registration } from "./pages/registeration/Registeration.page";
import {NewStudent} from "./pages/newStudent/newStudent.page";
import {StudentOverview} from "./pages/studentOverview/studentOverview.page"
import {Addtask} from "./pages/addTask/Addtask.page"
import {AllStudent} from "./pages/allStudents/AllStudent.page.js"


function App() {

  
  return( 

    <div className="App">
    <Router  >
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
        <PrivateRoute path="/add-task">
        <Addtask/>
        </PrivateRoute>
        <PrivateRoute path="/all-student">
        <AllStudent/>
        </PrivateRoute>
        
        </Switch>
    </Router>
      </div>
  
  )}

export default App;

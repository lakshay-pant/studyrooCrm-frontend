import { EntryPage } from "./pages/entry/Entry.page";
import './App.css';
import "./components/Fontawesomeicons"
import  Dashboard from "./pages/dashboard/Dashboard"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp"
import { Registration } from "./pages/registeration/Registeration.page";
import { NewStudent } from "./pages/newStudent/newStudent.page";
import { StudentOverview } from "./pages/studentOverview/studentOverview.page"
import { Addtask } from "./pages/addTask/Addtask.page"
import AllStudent from "./pages/allStudents/AllStudentPage.js"
import { UncategorizedStudents } from "./components/student-overview/studOverview.comp"
function App() {

  return (
    <div className="App">
      <Router  >
        <Switch>
          <Route exact path="/">
            <EntryPage />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/dashboard"
            render={({ match: { url } }) => {
              return (
                <>
                <PrivateRoute path={`${url}/`}  exact ><Dashboard/></PrivateRoute>
                <PrivateRoute path={`${url}/all-student`} ><StudentOverview /></PrivateRoute>

              </>
              )
             
            }}
          />

          <PrivateRoute path="/addstudent">
            <NewStudent />
          </PrivateRoute>
          <PrivateRoute path="/student-overview">
          <AllStudent/>
          </PrivateRoute>
          <PrivateRoute path="/student-list">
          <UncategorizedStudents/>
          </PrivateRoute>
          <PrivateRoute path="/add-task">
            <Addtask />
          </PrivateRoute>
         

          


        </Switch>
      </Router>
    </div>

  )
}

export default App;

import './App.css'
import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent.jsx";

function App() {

    return (<>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    {/*Route is used to define the path and the component to be rendered*/}
                    {/*Custom path is http://localhost:3030 */}
                    {/*<Route path = '/'*/}
                    {/*       element = {<ListEmployeeComponent/>}/>*/}
                    {/*http://localhost:3030/employees*/}
                    <Route path = '/employees'
                           element = {<ListEmployeeComponent/>}/>
                    {/*Add Employee Route http://localhost:3030/add-employee */}
                    <Route path = {'/add-employee'}
                           element = {<EmployeeComponent/>}/>
                    {/*Update Employee Route http://localhost:3030/update-employee/id */}
                    <Route path = {'/update-employee/:id'}
                           element = {<EmployeeComponent/>}/>
                    {/*    Delete Employee Route http://localhost:3030/delete-employee/id */}
                    <Route path = {'/delete-employee/:id'}
                           element = {<EmployeeComponent/>}/>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>)
}

export default App

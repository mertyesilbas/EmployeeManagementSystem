import "./App.css";
import ListEmployeeComponent from "./components/Employee/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeComponent from "./components/Employee/EmployeeComponent.jsx";
import ListDepartmentComponent from "./components/Department/ListDepartmentComponent.jsx";
import DepartmentComponent from "./components/Department/DepartmentComponent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-row">
          <HeaderComponent />
          <div className="ml-12 flex h-screen w-screen flex-col items-center bg-white">
            <Routes>
              {/*Employee Routes*/}
              <Route path="/employees" element={<ListEmployeeComponent />} />
              <Route path={"/add-employee"} element={<EmployeeComponent />} />
              <Route
                path={"/update-employee/:id"}
                element={<EmployeeComponent />}
              />
              <Route
                path={"/delete-employee/:id"}
                element={<EmployeeComponent />}
              />
              {/* Department Routes */}
              <Route
                path="/departments"
                element={<ListDepartmentComponent />}
              />
              <Route path="/add-department" element={<DepartmentComponent />} />
              <Route path={'/update-department/:id'} element={<DepartmentComponent />} />
            </Routes>
          </div>
          {/*<FooterComponent />*/}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

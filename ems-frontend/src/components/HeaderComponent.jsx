import React from "react";
import {Link, useNavigate} from "react-router-dom";
const HeaderComponent = () => {
    return <div>
        <header>
            <nav className = 'navbar navbar-expand-lg fixed-top navbar-dark bg-dark d-flex justify-content-center'>
                <Link to={'/employees'} className='navbar-brand text-center' >Employee Management App</Link>
            </nav>
        </header>
    </div>
}

export default HeaderComponent;
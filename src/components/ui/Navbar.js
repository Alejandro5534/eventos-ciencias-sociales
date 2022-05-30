import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const styleNav ={
    "backgroundColor":"#1B396A"
  }
  return (
        <nav className="navbar navbar-expand-sm navbar-dark " style={styleNav}>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link 
                className="navbar-brand" 
                to="/"
            >
              <img src="/assets/tecnm_logo.png" width={150} className="d-inline-block align-top" alt=""/>
            </Link>

            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/acerca"
                    >
                        Acerca de
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/actividad"
                    >
                     Actividad   
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link " 
                        to="/estancias"
                    >
                     Estancias   
                    </NavLink>
                    {/* <NavLink 
                        className="nav-item nav-link dropdown-toggle" 
                        to="/sedes"
                    >
                     Sedes 
                    </NavLink> */}
                </div>
            </div>

           
        </nav>
    )
}
export default Navbar;
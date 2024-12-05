import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'rsuite';
import '../assets/css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons'

export default function Layout() {
    return (
        <>
            <div className="custom-navbar">
                <Nav>
                    <div className='navbar-header'>
                        <div className='navbar-logo'>
                            <NavLink to='/' style={{ 
                                textDecoration: 'none', 
                                display: 'flex', 
                                alignItems: 'center', 
                                color: 'white' }}>
                                <div>
                                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} size='xl' />
                                </div>
                                <div>
                                    <p>Temperature Monitoring Dashboard</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </Nav>
            </div>
            <div className="page-container">
                <Outlet />
            </div>
        </>
    )
}
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./components.css"
import { useSelector } from "react-redux";

function AppNavbar(){
  const cart = useSelector(state=>state.cart)
  let num = cart.length
    return(
        <>
          <Navbar expand="md" fixed="top" bg="white" className="shadow-sm">
          <Container>
            <Link to={"cart"} className="navbar-brand">
               <div>
                  <button data-text="Awesome" className="button text-gray-100 ms-2">
                    <span className="actual-text">&nbsp;uiverse&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;uiverse&nbsp;</span>
                  </button>
              </div>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Link to={"/"} className="nav-link">Home</Link>
                <Link to={"about"} className="nav-link">About</Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <button className="settings-btn self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 20 20" height={20} fill="none" className="svg-icon"><g strokeWidth="1.5" strokeLinecap="round" stroke="#5d41de"><circle r="2.5" cy={10} cx={10} /><path fillRule="evenodd" d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z" clipRule="evenodd" /></g></svg>
                  <span className="lable">Settings</span>
                </button>
                <button className="Btn self-center mt-2 text-white">
                {
                  num==0?<svg class="svgIcon w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"/>
                  </svg>:num 
                }
                   
                <span className="text">Checkout</span>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
        </>
    )
}

export default AppNavbar;

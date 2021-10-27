import React,{useState} from 'react'
import logo from './images/Vector.svg'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import {Link} from 'react-router-dom'

  export default function MyNavBar(){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
             <Navbar color="light" className="bg-white" light expand="md" style={{display:'flex', justifyContent:'flex-end',alignItems:'flex-end'}}>
        <NavbarBrand href="/" style={{flexGrow:5,marginLeft:15}}>
        <div className=''>
           <img src={logo} alt=""  style={{width:70, height:60}} />
       </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
         
            <NavItem >
              <Link to="/"><NavLink active> Home </NavLink> </Link>
            </NavItem>

            <NavItem>
              <Link to="/login"><NavLink>Login</NavLink></Link>
            </NavItem>

            <NavItem>
              <Link to="/register"><NavLink> Register </NavLink> </Link>
            </NavItem>
          
          </Nav>
    
        </Collapse>
      </Navbar>
        </div>
    )
  }
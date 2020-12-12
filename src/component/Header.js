import React,{Component} from 'react';

import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class Header extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">COVID-19 </Navbar.Brand>
                <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/india">INDIA</Link>
                <Link className="nav-link" to="/world">WORLD</Link>
                </Nav>
               
            </Navbar>
            </div>
        )
    }
}


export default Header;

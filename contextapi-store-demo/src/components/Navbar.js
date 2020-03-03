import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
// import styled from 'styled-components'
import { ButtonContainer }  from './StyledComponents'

export default class Navbar extends Component {

    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
                    <Link to ='/'>
                        {/* <i className="fa fa-phone"/> */}
                        <img src={logo} alt='storeImage' />
                    </Link>

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" >Products</Link>
                        </li>
                    </ul>
                    
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <i className="fa fa-shopping-cart">My Cart</i>
                        </ButtonContainer>
                    </Link>
                </nav>
            </React.Fragment>
        )
    }
}
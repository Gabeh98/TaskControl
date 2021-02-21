//Componente de renderizacao do logo
import './Logo.css'
import React from 'react'
import logo from '../../assets/images/logo.png'//Enderenco de import do logo
import {Link} from 'react-router-dom'
export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>

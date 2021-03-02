//Componente de renderizacao da tela de navegacao
//Icones utilizados usando o Font-Awesome
//Importado o react router para fazer as rotas na troca de componente do main
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Inicio
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuarios
            </Link>
            <Link to="/tasks">
                <i class="fa fa-tasks"></i> Tasks
            </Link>
        </nav>
    </aside>
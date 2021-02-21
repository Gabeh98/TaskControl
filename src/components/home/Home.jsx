//Componente da aplicacao onde renderiza a tela home

import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Inicio" subtitle="Segundo projeto em react.">
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema de cadastro desenvolvido em react</p>
    </Main>
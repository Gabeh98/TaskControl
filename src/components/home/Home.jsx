//Componente da aplicacao onde renderiza a tela home

import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Inicio" subtitle="TaskControl.">
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema de controle de tarefas desenvolvido em react</p>
    </Main>
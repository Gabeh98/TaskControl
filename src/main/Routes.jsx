import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import TaskCrud from '../components/user/TaskCrud'
{/*Componente principal para a distribuicao de rotas*/}
export default props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Route path='/tasks' component={TaskCrud}/>
        <Redirect from='*' to ='/'/>
    </Switch>

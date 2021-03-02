import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'tasks',
    title: 'Tarefas',
    subtitle: 'Cadastro de Tarefas:Incluir,Listar,Alterar e Excluir'
}
const baseUrl = 'http://localhost:3001/tasks'

const initialState = {
    user: { name: '', tarefa: ''},
    list: []
}
export default class taskCrud extends Component{
    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    //Salva o usuario usando a biblioteca http axios
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user,add=true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite o Nome..." />

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Tarefa</label>
                            <input type="text" className="form-control" name="tarefa" value={this.state.user.tarefa} onChange={e => this.updateField(e)} placeholder="Digite o tarefa..."></input>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-contnent-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    load(user) {
        this.setState({ user })
    }
    //Funcao para remocao de usuario
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user,false)
            this.setState({ list })
        })
    }
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tarefa</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.tarefa}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        //Retorna a tabela
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }

}
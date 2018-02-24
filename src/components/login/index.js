import React from 'react'
import {connect} from 'react-redux'
import FormButton from '../formButton'
import {logarUser, deslogarUser} from '../../actions'
import { Redirect } from 'react-router-dom'


const botaoLogin = () => {
    const props = {
        type: 'button',
        onClick: event => {
            loginUsuario()
        }
    }
    const children = 'Login'

    return <FormButton {...props}> {children} </FormButton>
}


const Login = ({usuario, logarUser}) => {
    return usuario ? (
    <Redirect to="/" /> 
    ) : (
        <article>
            <h1>Faça Login</h1>
            {botaoLogin}
        </article>
    ) 
}


const mapStateToProps = state => {
    return { usuario: state.usuario}
}

const mapDispatchToProps = dispatch => ({
    loginUsuario: () => {
        dispatch(logarUser())
    }
})

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginPage
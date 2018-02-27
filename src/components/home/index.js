import React from 'react'
import SectionNotas from '../secaoNotas'
import FormNotas from '../formNotas'
import Nota from '../../Nota'
import NovaLista from '../../ClasseNovaLista'
import './page.css'

import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import {adicionarNota, removerNota, habilitarEdicao, alterarNota, deslogarUser} from '../../actions'


const montaFormNotas = (adicionarNota, excluirNota, editarNota) => {

    const props = {
        key: 'form-note',
        notaAtual: new Nota('', ''),
        adicionarNota, // == IGUAL adicionarNota: adicionarNota
        excluirNota,
        editarNota
    }

    // return React.createElement(FormNotas, props)
    return <FormNotas {...props} />
}

const montaSecaoNotas = (listaNotas, adicionarNota, excluirNota, editarNota) => {

    const props = {
        key: 'section-notes',
        listaNotas,
        adicionarNota,
        excluirNota,
        editarNota
    }

    // return React.createElement(SectionNotas, props)
    return <SectionNotas {...props} />
}


const Home = ({listaNotas, adicionarNota, excluirNota, editarNota}) => {


    const props = { className: 'container' }

    let formNotas = montaFormNotas(adicionarNota, excluirNota, editarNota)
    let secaoNotas = montaSecaoNotas(listaNotas, adicionarNota, excluirNota, editarNota)


    return usuario ? (
        <main {...props}>
            {formNotas}
            {secaoNotas}
        </main>
    ) : (
        <Redirect to="/login" />
    )

}

const mapStateToProps = state => {
    return { listaNotas: state.listaNotas }
}

const mapDispatchToProps = dispatch => (
    {
        adicionarNota: (titulo, texto, formulario, index) => {

            if (index === undefined) {
                dispatch(adicionarNota(titulo, texto))
                formulario.reset();
            } else {
                dispatch(alterarNota(index, titulo, texto))
            }
            
        },

        excluirNota: (evento, index) => {
            evento.stopPropagation();
            dispatch(removerNota(index));
        },
        editarNota: index => {
            dispatch(habilitarEdicao(index))
        }
    
    }
)

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomePage
import React from 'react'
import {connect} from 'react-redux'
import {adicionarNota, removerNota, habilitarEdicao, alterarNota} from './actions'
import Page from './index'



const mapStateToProps = state => { listaNotas: state.notas }

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

        removerNota: (evento, index) => {
            evento.stopPropagation();
            dispatch(removerNota(index));
        },
        editarNota: index => {
            dispatch(habilitarEdicao(index))
        }
    
    }
)

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer
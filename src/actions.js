import {getNotas, postNota, deleteNota, putNota} from './api'


export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const SAVE_NOTE = 'SAVE_NOTE'
export const LOGA_USER = 'LOGA_USER'
export const DESLOGA_USER = 'DESLOGA_USER'
export const LISTAR_NOTAS = 'LISTAR_NOTAS'

export function listaNotas() {
    return dispatch => {
        getNotas()
        .then(resposta => {
            dispatch({
                type: LISTAR_NOTAS,
                lista: resposta.data.notas
            })
        })
        .catch(erro => {
            console.log('Ocorreu erro' + erro)
        })
    }
}

export function adicionarNota(titulo, texto) {

    return dispatch => {
        postNota(titulo, texto)
            .then(resposta => {
                dispatch({
                    type: ADD_NOTE,
                    index: resposta.data.index,
                    titulo,
                    texto
                })
            })
            .catch(erro => {
                console.log('Ocorreu um erro', erro)
            })
    }

    // return {
    //     type: ADD_NOTE,
    //     titulo,
    //     texto
    // }
}

export function removerNota(index) {

    return dispatch => {
        deleteNota(index)
            .then(() => {
                dispatch({
                    type: REMOVE_NOTE,
                    index
                })
            })
            .catch(erro => {
                console.log('Ocorreu um erro', erro)
            })
    }

    // return {
    //     type: REMOVE_NOTE,
    //     index
    // }
}

export function habilitarEdicao(index) {
    return {
        type: EDIT_NOTE,
        index
    }
}

export function alterarNota(index, titulo, texto) {

    return dispatch => {
        putNota(index, titulo, texto)
            .then(() => {
                dispatch({
                    type: SAVE_NOTE,
                    index,
                    titulo,
                    texto
                })
            })
            .catch(erro => {
                console.log('Ocorreu um erro', erro)
            })
    }

    // return {
    //     type: SAVE_NOTE,
    //     index,
    //     titulo,
    //     texto
    // }
}

export function logarUser(usuario) {
    return {
        type: LOGA_USER
    }
}

export function deslogarUser(usuario) {
    return {
        type: DESLOGA_USER
    }
}
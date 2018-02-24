
export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const SAVE_NOTE = 'SAVE_NOTE'
export const LOGA_USER = 'LOGA_USER'
export const DESLOGA_USER = 'DESLOGA_USER'


export function adicionarNota(titulo, texto) {
    return {
        type: ADD_NOTE,
        titulo,
        texto
    }
}

export function removerNota(index) {
    return {
        type: REMOVE_NOTE,
        index
    }
}

export function habilitarEdicao(index) {
    return {
        type: EDIT_NOTE,
        index
    }
}

export function alterarNota(index, titulo, texto) {
    return {
        type: SAVE_NOTE,
        index,
        titulo,
        texto
    }
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
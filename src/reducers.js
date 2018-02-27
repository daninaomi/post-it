import {
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  SAVE_NOTE,
  LOGA_USER,
  DESLOGA_USER
} from './actions'

import Nota from './Nota'
import combineReducers from 'redux'


function usuario(state = false, action) {
  switch (action.type) {
    case LOGA_USER:
      return true
    case DESLOGA_USER:
      return false
    default:
      return state
  }
}

function notas(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      let novaNota = new Nota(action.index, action.titulo, action.texto);

      return { listaNotas: state.listaNotas.concat(novaNota) };
    // array concat

    case REMOVE_NOTE:

      return {
        listaNotas: state.listaNotas.filter(notaAtual => {
          return notaAtual.index !== action.index
        })
      };
    // filter pra retirar nota

    case EDIT_NOTE:

      return {
        listaNotas: state.listaNotas.map(notaAtual => {
          if (notaAtual.index === action.index) {
            return new Nota(notaAtual.index, notaAtual.titulo, notaAtual.texto, true);
          } else {
            return notaAtual
          }
        }
        )
      };
    // map pra pegar index

    case SAVE_NOTE:

      return {
        listaNotas: state.listaNotas.map(notaAtual => {
          if (notaAtual.index === action.index) {
            return new Nota(action.index, action.titulo, action.texto, false);
          } else {
            return notaAtual
          }
        }
        )
      };
    // map pra pegar index

    default:
      return state
  }
}

const reducer = combineReducers({ usuario, notas })

export default reducer

// https://redux.js.org/basics/reducers


      // return Object.assign({}, state, {
      //   adicionarNota: listaNotas.push(),
      //   listaNotas: [
      //     action.titulo,
      //     action.texto,
      //     action.editando = false
      //   ]
      // })

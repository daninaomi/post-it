import React from 'react'

import FormInput from './formInput'
import FormTextArea from './formTextArea'
import FormButton from './formButton'
import Form from './form'
import Nota from '../Nota'


const createInputTitulo = (notaAlterada) => {
    const props = {
        key: 'note-title',
        className: 'note__title',
        type: 'text',
        name: 'title',
        placeholder: 'Título',
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    }

    if ( notaAlterada.index !== undefined && !notaAlterada.editando) {
        props.readOnly = true
    }

    // return React.createElement(FormInput, props)
    return <FormInput {...props} />
}

const createInputTexto = (notaAlterada) => {
    const props = {
        key: 'note-body',
        className: 'note__body',
        name: 'body',
        rows: '5',
        placeholder: 'Criar uma nota...',
        defaultValue: notaAlterada.texto,
        onChange: event => {
            notaAlterada.texto = event.target.value;
        }
    }

    if ( notaAlterada.index !== undefined && !notaAlterada.editando) {
        props.readOnly = true
    }

    // return React.createElement(FormTextArea, props)
    return <FormTextArea {...props} />
}

const createBotaoSalvar = (adicionarNota, notaAlterada) => {
    const props = {
        key: 'note-button-save',
        className: 'note__control',
        type: 'button',
        onClick: event => {
            adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, notaAlterada.index)
        }
    }

    const children = 'Salvar'

    // return React.createElement(FormButton, props, children)
    return <FormButton {...props}> {children} </FormButton>

};

const createButtonRemover = (notaAlterada, excluirNota) => {

    const props = {
        key: 'note-button-delete',
        className: 'note__excluir',
        onClick: event => {
            // event.stopPropagation()
            excluirNota(event, index)
        }
    }

    const children = React.createElement('i', {
        className: 'fa fa-times',
        'aria-hidden': true
    })

    // return React.createElement(FormButton, props, children)
    return <FormButton {...props}> {children} </FormButton>
};


function FormNotas({notaAtual, adicionarNota, excluirNota, editarNota}) {

    let notaAlterada = new Nota(notaAtual.index, notaAtual.titulo, notaAtual.texto, notaAtual.editando)

    let inputTitulo = createInputTitulo(notaAlterada);
    let inputTexto = createInputTexto(notaAlterada);
    let botaoExcluir = createButtonRemover(excluirNota, notaAlterada);
    let botaoSalvar = createBotaoSalvar(adicionarNota, notaAlterada);

    // let children;
    let props = { className: 'note' };

    // if (notaAlterada.editando === true) {
    //     formNotas.className = 'note note--editing';
    //     inputTitulo.className = 'note__title note--editing';
    //     inputTexto.className = 'note__body note__body--editing';
    // }

    if (notaAlterada.index !== undefined && !notaAlterada.editando) {
        props.onClick = () => editarNota(notaAlterada.index)
    }

    // return React.createElement(Form, propsForm, children)
    return (
        <Form {...props}>
            {notaAlterada.index !== undefined && notaAlterada.editando && botaoExcluir}
            {inputTitulo}
            {inputTexto}
            {(notaAlterada.index === undefined || notaAlterada.editando) && botaoSalvar}
        </Form>
    )
}

export default FormNotas;


// if (index === undefined) {
    //     // template nova nota
    //     children = [inputTitulo, inputTexto, botaoSalvar]
    // } else {

    //     if (notaAlterada.editando === true) {
            
    //         children = [botaoExcluir, inputTitulo, inputTexto, botaoSalvar];

    //     } else {
    //         props.onClick = () => editarNota(index);
    //         children = [botaoExcluir, inputTitulo, inputTexto];
    //     }
    // }
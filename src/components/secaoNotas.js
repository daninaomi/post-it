import React from 'react'
import Section from './section'
import FormNotas from './formNotas'


const createFormNotas = (adicionarNota, excluirNota, editarNota, notaAtual) => {

    const props = {
        notaAtual,
        key: index,
        adicionarNota,
        excluirNota,
        editarNota
    }

    // return React.createElement(FormNotas, props)
    return (
        <FormNotas key={notaAlterada.index} {...props} />
    )

}


function SecaoNotas({ listaNotas, adicionarNota, excluirNota, editarNota }) {

    // let secao = React.getElementsByClassName('notes')[0];

    const props = { className: 'notes' };

    // return React.createElement(Section, props, children);
    return (
        <Section {...props}>
            {listaNotas.map((notaAtual, index) => (
                createFormNotas(adicionarNota, excluirNota, editarNota, notaAtual)
            ))}
        </Section>
    )

}

export default SecaoNotas;


// for (var index = 0; index < listaNotas.contaTotal(); index++) {

//         let formNotas = createFormNotas(adicionarNota, excluirNota, editarNota, listaNotas, index);

//         children.push(formNotas);
//     }
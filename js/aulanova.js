// var pessoa = {
//     nome: "Camila",
//     idade: 18,
//     descobrirAnoNascimento: function() {

//     }
// }

// pessoa.descobrirAnoNascimento()

const novaLista = {
    listaNotas: [],
    secao: document.getElementsByClassName("notes")[0],

    adicionar(novoTitulo, novoTexto, secao) {

        let nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        this.listaNotas.push(nota);
        atualizarSecao(this.secao);

    },

    editar(index) {

        this.listaNotas[index].editando = true;
        atualizarSecao(this.secao);

    },

    remover(index){

        this.listaNotas.splice(index, 1);
        atualizarSecao(this.secao);

    },

    salvar(index, novoTitulo, novoTexto) {

        this.listaNotas[index].titulo = novoTitulo;
        this.listaNotas[index].texto = novoTexto;
        this.listaNotas[index].editando = false;

        atualizarSecao(this.secao);

    },

    pegar(index) {
        return this.listaNotas[index]
    },
    contaTotal() {
        return this.listaNotas.length
    }
};

const atualizarSecao = secao => {

    let inserirHTML = "";

    for (let index = 0; index < novaLista.contaTotal(); index++) {

        let notaAtual = novaLista.pegar(index);

        if (notaAtual.editando == true) {

            inserirHTML += `<form class="note note--editing">
                    <input class="note__title note__title--editing" type="text" name="title" placeholder="Título" value="${notaAtual.titulo}" autofocus /> 
                    <textarea class="note__body note__body--editing" name="body" rows="5" placeholder="Criar uma nota..."> ${notaAtual.texto} </textarea>
                    <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.body, this.form, ${index} )"> Salvar </button> 
                    </form>`;

        } else {

            inserirHTML += `<form class="note" onclick="editarNota(${index})">
                    <button class="note__excluir" onclick="excluirNota(event, ${index} )">
                    <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <h1 class="note__title"> ${notaAtual.titulo} </h1>
                    <p class="note__body"> ${notaAtual.texto} </p>
                    </form>`;
        }
    }

    secao.innerHTML = inserirHTML;

};


const editarNota = index => novaLista.editar(index);


const adicionarNota = (inputTitulo, inputTexto, formulario, index) => {

    console.log(inputTexto);

    if (novaLista.pegar(index)) {

        novaLista.salvar(index, inputTitulo.value, inputTexto.value);

    } else {

        novaLista.adicionar(inputTitulo.value, inputTexto.value);
        formulario.reset();

    }
};


const excluirNota = (evento, index) => {

    evento.stopPropagation();

    novaLista.listaNotas.splice(index, 1);

};

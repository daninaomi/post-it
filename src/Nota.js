class Nota {
    constructor(novaIndex, novoTitulo, novoTexto, novoEditando = false) {
        this.index = novaIndex;
        this.titulo = novoTitulo;
        this.texto = novoTexto;
        this.editando = novoEditando;
    }
};

export default Nota;
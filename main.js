class Contato {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista');
        listaContatos.innerHTML = '';

        for (const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;
            listaContatos.appendChild(li);
        }
    }
}

const gerenciadorContatos = new GerenciadorContatos();

const contatoForm = document.getElementById('contato-form');
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = nomeF.value;
    const email = emailF.value;
    const telefone = telefoneF.value;

    const contato = new Contato(nome, email, telefone);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = '';
    emailF.value = '';
    telefoneF.value = '';
});

mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
});

ocultarContatos.addEventListener('click', () => {
    listaContatos.style.display = 'none';
});

class Mensagem {
    constructor(texto) {
        this.texto = texto;
    }
}

class GerenciadorMensagens {
    constructor() {
        this.mensagens = [];
    }

    adicionarMensagem(mensagem) {
        this.mensagens.push(mensagem);
    }

    exibirMensagens() {
        const mensagemLista = document.getElementById('mensagem-lista');
        mensagemLista.innerHTML = '';

        for (const mensagem of this.mensagens) {
            const p = document.createElement('p');
            p.textContent = mensagem.texto;
            mensagemLista.appendChild(p);
        }
    }
}

const gerenciadorMensagens = new GerenciadorMensagens();

const mensagemForm = document.getElementById('mensagem-form');
const mensagemInput = document.getElementById('mensagem');
const adicionarMensagemButton = document.getElementById('adicionar-mensagem');
const mostrarMensagensButton = document.getElementById('mostrar-mensagens');
const ocultarMensagensButton = document.getElementById('ocultar-mensagens');
const mensagemLista = document.getElementById('mensagem-lista');

mensagemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoMensagem = mensagemInput.value;
    const mensagem = new Mensagem(textoMensagem);

    gerenciadorMensagens.adicionarMensagem(mensagem);
    gerenciadorMensagens.exibirMensagens();

    mensagemInput.value = '';
});

mostrarMensagensButton.addEventListener('click', () => {
    gerenciadorMensagens.exibirMensagens();
    mensagemLista.style.display = 'block';
});

ocultarMensagensButton.addEventListener('click', () => {
    mensagemLista.style.display = 'none';
});
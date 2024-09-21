// allValues = document.body.childNodes;

// console.log(allValues);

// allParagraphs = document.querySelectorAll('p');

// let cont = 0;

// allParagraphs.forEach(paragraph => {
//     console.log(paragraph.textContent);
//     paragraph.textContent = `Novo parágrafo adicionado ${cont}`;
//     cont++;
// });


// Declarações
nome = document.querySelector('#nome');
telefone = document.getElementById('telefone');
email = document.getElementsByClassName('email')[0];
btEnviar = document.querySelector("#btnEnviar");
spans = document.querySelectorAll('span');
btAdicionarCampo = document.querySelector('#btnAddField');

form = document.querySelector('form');
console.log(form.childNodes);

// Funções
const validarNome = () => {
    const re = /[a-zA-Z]/;
    const valor = nome.value;
    if (!re.test(valor.slice(-1))) {
        nome.value = valor.slice(0, -1);
    }
};

const validarTelefone = () => {
    const re = /[0-9]/;
    const valor = telefone.value;
    if (!re.test(valor.slice(-1))) {
        telefone.value = valor.slice(0, -1);
    }
};

const toggleNomeField = () => {
    nome.classList.toggle("invalid");
}

let campo = "Novo Campo";
const adicionarCampo = () => {

    const div = document.createElement('div');
    div.classList.add('input-container');

    const label = document.createElement('label');
    label.innerHTML = campo;
    label.htmlFor = campo;

    const input = document.createElement('input');
    input.id = campo;
    input.name = campo;

    div.appendChild(label);
    div.appendChild(input);

    form.insertBefore(div, form.lastElementChild);
};


// Eventos
nome.addEventListener('keyup', (e) => {
    console.log("Soltou a tecla!");
    validarNome();
});

// nome.addEventListener('keydown', (e) => {
//     console.log("Apertou a tecla!");
// });

// nome.addEventListener('focus', (e) => {
//     console.log("Clicou no campo!");
// });

nome.addEventListener('blur', (e) => {
    console.log("Saiu no campo!");
    if (nome.value.length < 10) {
        console.log('O nome deve ter mais do que 10 caracteres!');
    }
});


// btAdicionarCampo.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("Clicou para adicionar um campo!");
//     adicionarCampo('Novo Campo');
// });

btAdicionarCampo.addEventListener('click', adicionarCampo);

btEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicou no botão!');

    if (!nome.value) {
        nome.classList.add("invalid");
        spans[0].classList.remove("hide");
    } else {
        nome.classList.remove("invalid");
        spans[0].classList.add("hide");
    }

    btAdicionarCampo.removeEventListener('click', adicionarCampo);

    setTimeout(() => {
        console.log("Timeout!");
    }, 2000);

    setInterval(() => {
        console.log("Interval!");
    }, 2000);
});

// const promessa = Promise.resolve(10 * "qwerty");

// promessa.then((valor) => { 
//     if (Number.isNaN(valor))
//         throw new Error("Não é um número válido");
//     return valor * 2; 
// }).then((valor) => {console.log(valor)
//     return valor * 2;
// }).catch((erro) => console.log(erro));

// console.log('Após a definição da promessa');


// const promessa = new Promise((resolve, reject) => {
//     if (!true){
//         resolve("Sucesso!");
//     }else{
//         reject("Rejeitado!");
//     }
// });

// promessa.then((valor) => console.log(valor)).catch((erro) => console.log(erro));

// const p = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Primeira Promessa Resolvida!')
//     }, 3000);
// });

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Segunda Promessa Resolvida!')
//     }, 2000);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Terceira Promessa Resolvida!')
//     }, 1000);
// });

// p.then((valor) => console.log(valor));
// p1.then((valor) => console.log(valor));
// p2.then((valor) => console.log(valor));

// Promise.all([p, p1, p2]).then((values) => console.log(values));

// const funcaoPromessa = (numero) => {
//     return new Promise((resolve, reject) => {
//         if (numero)
//             resolve("Resolvido!");
//         else
//             reject('Rejeitado!');
//     })
// }

// const a = funcaoPromessa(20);
// const b = funcaoPromessa();

// a.then((valor) => console.log(valor)).catch((erro) => console.log(erro));
// b.then((valor) => console.log(valor)).catch((erro) => console.log(erro));

// async function soma(a, b){
//     return a + b;
// };

// const subtracao = async (a,b) =>{
//     return a-b;
// };

// const soma2 = (a,b) => {
//     return new Promise((resolve) => {
//         setTimeout(console.log('Timeout'), 10000);
//         resolve(a+b);
//     });
// } ;

// // soma(18,4).then((resultado) => console.log(resultado));
// // subtracao(18,4).then((resultado) => console.log(resultado));

// const funcaoUsandoAwait = async () => {
//     console.log('antes da chamada da promessa ');
//     const resultado = await soma2(18,4);
//     console.log(`Após a chamada da promessa: ${resultado}`)
// };

// funcaoUsandoAwait();

const conectarAoServidor = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    console.log(res.status);
    if(!res.ok){
        console.log("Erro no servidor");
    }else{
        const json = res.json();
        console.log(json);
    }
}
const conectarAoServidorPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = {
        title: 'Título da postagem',
        body: 'Corpo da postagem',
        userId: '1'
    }
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    console.log(res.status);
}

const conectarAoServidorAxios = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await axios.get(url);
    console.log(res.status);
    const data = res.data;
    console.log(data);
}

const conectarAoServidorPostAxios = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = {
        title: 'Título da postagem',
        body: 'Corpo da postagem',
        userId: '1'
    }
    const res = await axios.post(url, { data });
    console.log(res.status);
}

conectarAoServidorPostAxios();

// conectarAoServidorPost();
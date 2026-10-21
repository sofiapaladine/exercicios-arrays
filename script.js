
 // Questão 1
{
    const frutas = ["maçã", "banana", "laranja"];

    frutas.push("uva");
    frutas.unshift("abacaxi");
    frutas.pop();
    frutas.shift();

    console.log(frutas);
}

// Questão 2
{
    const numeros = [10, 20, 30, 40, 50, 60];

    const parte = numeros.slice(2, 5);

    console.log(parte);
}

// Questão 3
{
    const cores = ["azul", "verde", "amarelo", "vermelho"];

    cores.splice(1, 2, "roxo", "laranja");
    cores.splice(1, 0, "preto");

    console.log(cores);
}

// Questão 4
{
    const frontEnd = ["HTML", "CSS", "JavaScript"];
    const backEnd = ["Node.js", "Python", "Java"];

    const tecnologias = frontEnd.concat(backEnd);

    console.log(tecnologias);
}

// Questão 5
{
    const palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];

    console.log(palavras.join(" "));
}

// Questão 6
{
    const linguagens = ["JavaScript", "Python", "Java", "C#"];

    function temLinguagem(nome) {
        return linguagens.includes(nome);
    }

    function temLinguagemIgnorandoMaiusculas(nome) {
        return linguagens.map(item => item.toLowerCase()).includes(nome.toLowerCase());
    }

    console.log(temLinguagem("Python"));
    console.log(temLinguagem("Ruby"));
    console.log(temLinguagemIgnorandoMaiusculas("python"));
}

// Questão 7
{
    const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniel"];

    console.log(nomes.indexOf("Ana"));
    console.log(nomes.lastIndexOf("Ana"));
    console.log(nomes.indexOf("Marcos"));
}

// Questão 8
{
    const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

    produtos.forEach((produto, indice) => {
        console.log(indice + " - " + produto);
    });
}

// Questão 9
{
    const precos = [100, 250, 80, 320, 150];

    const comDesconto = precos.map(preco => preco * 0.9);

    console.log(comDesconto);
}

// Questão 10
{
    const numeros = [3, 8, 11, 14, 21, 26, 30, 35];

    const pares = numeros.filter(numero => numero % 2 === 0);

    console.log(pares);
}

// Questão 11
{
    const alunos = [
        { nome: "Ana", nota: 8.5 },
        { nome: "Bruno", nota: 6.0 },
        { nome: "Carlos", nota: 9.2 },
        { nome: "Daniel", nota: 7.5 }
    ];

    const aluno = alunos.find(aluno => aluno.nota >= 9);

    console.log(aluno);
}

// Questão 12
{
    const produtos = [
        { id: 101, nome: "Notebook" },
        { id: 205, nome: "Mouse" },
        { id: 310, nome: "Teclado" },
        { id: 450, nome: "Monitor" }
    ];

    function buscarIndice(id) {
        return produtos.findIndex(produto => produto.id === id);
    }

    console.log(buscarIndice(205));
    console.log(buscarIndice(999));
}

// Questão 13
{
    const notas = [5.5, 6.0, 7.2, 8.0, 9.5];

    console.log(notas.some(nota => nota >= 9));
    console.log(notas.some(nota => nota < 6));
}

// Questão 14
{
    const idades = [22, 31, 19, 27, 40];
    const idades2 = [22, 17, 19, 27, 40];

    console.log(idades.every(idade => idade >= 18));
    console.log(idades2.every(idade => idade >= 18));
}

// Questão 15
{
    const precos = [29.90, 49.90, 15.50, 100.00];

    const total = precos.reduce((soma, preco) => soma + preco, 0);

    console.log(total.toFixed(2));

    const produtos = [
        { nome: "Caderno", preco: 29.90 },
        { nome: "Caneta", preco: 15.50 }
    ];

    const totalProdutos = produtos.reduce((soma, produto) => soma + produto.preco, 0);

    console.log(totalProdutos.toFixed(2));
}

// Questão 16
{
    const numeros = [100, 8, 25, 3, 45, 12];

    const crescente = [...numeros].sort((a, b) => a - b);
    const decrescente = [...numeros].sort((a, b) => b - a);

    console.log(crescente);
    console.log(decrescente);
    console.log("Sem comparação, sort() ordena como texto.");
}

// Questão 17
{
    const fila = ["Ana", "Bruno", "Carlos", "Daniel"];

    const invertida = fila.slice().reverse();

    console.log(invertida);
    console.log(fila);
    console.log("reverse() sozinho modifica o array original.");
}

// Questão 18
{
    const categorias = [
        ["HTML", "CSS"],
        ["JavaScript", "TypeScript"],
        ["Node.js", "Express"]
    ];

    console.log(categorias.flat());

    const tresNiveis = [[["HTML", "CSS"]], [["JavaScript"]]];

    console.log(tresNiveis.flat());
    console.log(tresNiveis.flat(2));
}

// Questão 19
{
    const turmas = [
        { nome: "Turma A", alunos: ["Ana", "Bruno"] },
        { nome: "Turma B", alunos: ["Carlos", "Daniel", "Eva"] }
    ];

    const nomes = turmas.flatMap(turma => turma.alunos);

    console.log(nomes);

    const alunosComTurma = turmas.flatMap(turma =>
        turma.alunos.map(nome => ({ nome: nome, turma: turma.nome }))
    );

    console.log(alunosComTurma);
}

// Questão 20
{
    const vendas = [
        { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
        { produto: "Mouse", categoria: "Informática", valor: 120, quantidade: 5 },
        { produto: "Cadeira", categoria: "Móveis", valor: 900, quantidade: 3 },
        { produto: "Teclado", categoria: "Informática", valor: 250, quantidade: 4 },
        { produto: "Mesa", categoria: "Móveis", valor: 1200, quantidade: 1 }
    ];

    const informatica = vendas.filter(venda => venda.categoria === "Informática");

    console.log(informatica);

    const totais = informatica.map(venda => ({
        produto: venda.produto,
        total: venda.valor * venda.quantidade
    }));

    console.log(totais);

    const faturamento = totais.reduce((soma, venda) => soma + venda.total, 0);

    console.log(faturamento);

    const maiorFaturamento = [...totais].sort((a, b) => b.total - a.total)[0];

    console.log(maiorFaturamento);

    const nomes = informatica.map(venda => venda.produto);

    console.log(nomes);

    const totalEncadeado = vendas
        .filter(venda => venda.categoria === "Informática")
        .map(venda => venda.valor * venda.quantidade)
        .reduce((soma, valor) => soma + valor, 0);

    console.log(totalEncadeado);
}

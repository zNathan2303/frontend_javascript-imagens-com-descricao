'use strict'

const imagens = [
    {
        nome: 'lamborghini 2000',
        url: './img/lamborghini-2000.jpg'
    },
    {
        nome: 'lamborghini 2010',
        url: './img/lamborghini-2010.jpg',
    },
    {
        nome: 'lancer 2000',
        url: './img/lancer-2000.webp'
    },
    {
        nome: 'lancer 2010',
        url: './img/lancer-2010.jpg'
    },
    {
        nome: 'lancer 2020',
        url: './img/lancer-2020.jpg'
    },
    {
        nome: 'skyline r32',
        url: './img/skyline_r32.jpg'
    },
    {
        nome: 'skyline r33',
        url: './img/skyline_r33.jpg'
    },
    {
        nome: 'skyline r34',
        url: './img/skyline_r34.jpg'
    }
]

function criarImagem(srcImagem) {
    const galeria = document.getElementById('galeria')

    const div = document.createElement('div')
    div.className = 'imagem'
    
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    const descricao = document.createElement('span')
    descricao.textContent(srcImagem.nome)

    galeria.appendChild(div)
    div.appendChild(imagem)
}

function carregarImagens() {
    // const galeria = document.getElementById('galeria')

    // let contador = 0

    // while (contador < imagens.length) {
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens[contador]
    //     galeria.appendChild(imagem)
    //     contador++
    // }

    imagens.forEach(criarImagem)
}

carregarImagens()
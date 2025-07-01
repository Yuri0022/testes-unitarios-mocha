const {pesquisarPessoaPorCPF} = require('../src/pesquisar.js')
const { strictEqual } = require('node:assert')

describe ('Pesquisar', () => {
    it('Ao informar o CPF da Isabelle teremos o seu nome , CPF e frutas favoritas', () => {
        //Arrange
        const cpfPesquisado ='987654321'
        const nomeEsperado = 'isabelle'
        const cpfEsperado = '987654321'
        const primeiraFrutaEsperada = 'abacaxi'
        const segundaFrutaEsperada = 'maçã'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        //Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })

    it('Ao informar um CPF que não existe, deve retornar CPF não encontrado', () => {
        //Arrange
        const cpfPesquisado = '000000000'
        const mensagemEsperada = 'CPF não encontrado'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        //Assert
        strictEqual(pessoa, mensagemEsperada) 
    })
})
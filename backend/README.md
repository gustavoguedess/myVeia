<h2 align="center">
  🚧  NodeJS 🚀 em Construção  🚧
</h2>
<br>
# Instalando dependências
yarn install

# Executar
yarn dev

# Criando um novo repositório
yarn init -y
yarn add express
yarn add @types/express

## Baixa o conversor de typescript para node
yarn add typescript -D

## Cria os arquivos para converter
yarn tsc --init

## Converte automaticamente
yarn ts-node-dev -D

## Coloca o conversor em package.json
"scripts": {
  "dev":"ts-node-dev src/server.ts"
}
# Regras 
- Cadastro de Usuários
  - [ x ] Para cadastrar é preciso somente o Nome, documento e data de nascimento
  - [ ] A senha padrão é a data de nascimento.
  - [ ] A senha tem que ser criptografada

- Cadastrar Multiplos Usuários
  - [ ] Somente Admin cadastra múltiplos usuários
  - [ ] É preciso mandar uma lista de usuários no formato Nome,documento,data_nasc
  - [ ] Usuários com documento já cadastrado não terão alteração
  - [ ] Usuários com documento não cadastrado serão criados com permissão de morador
  - [ ] Usuários com documentos fora da lista deverão receber a permissão de exmorador

- Login de Usuário
  - [ ] Não é permitido logar usuário exmorador
  - [ ] O login do usuário é o documento
  - [ ] A senha padrão é a data de nascimento
  - [ ] Ativa a conta

- Rotinas
  - [ ] Quando passados 5 meses do último login o usuário é inativado

- Visualizações
  - [ ] Fulano A visualiza Fulano B 

- Match
  - [ ] Quando ambos derem match, aparece a tela de match

<br>
## Camadas
- Repository
  Gerencia o banco de dados utilizando as entidades. Faz toda comunicação (criação, )

- Services
  Camada de Serviço. Fica as regras da aplicação. Validação, verificação.

- Controller
  Camada de controle. Comunica entre o server e o service. Gerencia o Request e o Response. Funcionamento da Rota
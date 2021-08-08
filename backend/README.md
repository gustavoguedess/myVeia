
# Instalando dependências
yarn install

# Executar
yarn 

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



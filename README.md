# Lipsticks Front

Este projeto é um aplicativo React para gerenciar informações sobre batons.

## Instalação

Siga as etapas abaixo para instalar as dependências e iniciar o projeto.

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js: [https://nodejs.org](https://nodejs.org)
- NPM (gerenciador de pacotes do Node.js, normalmente instalado junto com o Node.js)

### Passo 1: Clonar o repositório

Clone este repositório em sua máquina local

### Passo 2: Instalar as dependências

Navegue até o diretório do projeto e instale as dependências:

 ```shell
cd lipsticks-front
npm install
```

### Passo 3: Configurar variáveis de ambiente

Se necessário, configure as variáveis de ambiente do projeto de acordo com as instruções fornecidas no arquivo `.env`.

### Passo 4: Iniciar o projeto

* Inicie o projeto localmente:
 ```shell
npm start
```

## Dependências

- @emotion/react: ^11.11.1
- @emotion/styled: ^11.11.0
- @fontsource/roboto: ^5.0.5
- @mui/icons-material: ^5.13.7
- @mui/material: ^5.13.7
- @mui/styled-engine-sc: ^5.12.0
- @testing-library/jest-dom: ^5.16.5
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- axios: ^1.4.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-scripts: 5.0.1
- styled-components: ^5.3.11
- web-vitals: ^2.1.4

# Documentação da API tipo B ViaCEP

## Visão Geral

A API ViaCEP é uma API pública que fornece informações de endereços com base em CEPs (Códigos de Endereçamento Postal) brasileiros. Esta documentação descreve como integrar e usar a API ViaCEP no projeto. A chamada dessa API está sendo feito pelo GET no back-end.

### Nome da Api

ViaCEP

### URL da API

 https://viacep.com.br

 ## Licença de Uso

A API ViaCEP é gratuita para uso público e não requer autenticação ou chave de API.

## Cadastro (Não Necessário)

Não é necessário fazer um cadastro ou obter uma chave de API para acessar a API ViaCEP. O acesso é público e aberto para todos.

## Rotas e Funcionalidades

### Consulta de Endereço por CEP
#### Endpoint: 
/ws/{cep}/json/
#### Método HTTP: GET
#### Descrição: 
Esta rota permite consultar informações de endereço com base em um CEP fornecido.
#### Parâmetros de URL:
{cep} (string): O CEP que deseja consultar, sem hífens.

#### Exemplo de Uso:
URL: https://viacep.com.br/ws/01001000/json/

Resposta:
```shell
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```


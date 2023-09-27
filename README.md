# Lipsticks Front

Este projeto é um aplicativo React para gerenciar informações sobre batons.

## Inicialização

### 1. Construir a Imagem Docker

Abra um terminal no diretório do seu projeto e execute o seguinte comando para construir a imagem Docker:

```shell
docker build -t lipsticks-front:latest .
```

### 2. Executar o Container Docker

Uma vez que a imagem esteja construída, você pode executar um container Docker a partir dela:

```shell
docker run -p 3000:3000 lipsticks-front:latest
```

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

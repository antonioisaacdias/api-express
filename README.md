# API de Cadastro de Clientes

Uma API RESTful simples para gerenciar o cadastro de clientes. Este projeto foi desenvolvido para a disciplina de Programação com Frameworks Web Avançados, utilizando Node.js, Express e Sequelize.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para Node.js.
* **Sequelize**: ORM (Object-Relational Mapper) para Node.js, utilizado para interagir com o banco de dados.
* **PostgreSQL**: Banco de dados relacional.
* **Docker e Docker Compose**: Usados para orquestrar o container do banco de dados.

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de que você tem instalado em sua máquina:

* **Node.js**
* **npm** (gerenciador de pacotes do Node.js)
* **Docker** e **Docker Compose**

## 🔧 Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Copie o arquivo de exemplo para criar o seu arquivo de configuração:
    ```bash
    cp .env.example .env
    ```
    Edite o arquivo `.env` com as suas configurações, se necessário. As credenciais do banco de dados já estão pré-configuradas no `docker-compose.yml`.

4.  **Inicie o banco de dados com Docker Compose:**
    ```bash
    docker-compose up --build
    ```
    Isso irá iniciar um container com o banco de dados PostgreSQL.

## ▶️ Como Rodar a Aplicação

Com o banco de dados em execução, você pode iniciar a API:

```bash
npm run dev

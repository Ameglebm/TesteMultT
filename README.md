## 📃 Sobre o Projeto

Este é um sistema **multi-tenant** desenvolvido com **NestJS** e **Prisma ORM**, onde cada loja tem seus próprios dados isolados. Os módulos incluem autenticação, gerenciamento de lojas, produtos, clientes, criação de funcionarios, orçamentos e controle financeiro.

**Estrutura multitenant**: os dados de cada loja (usuários, produtos, clientes, etc.) são associados a um identificador da loja (`lojaId`), permitindo um banco compartilhado com separação lógica.

**Tecnologias principais**:
- <img height="20" width="25" src="https://skillicons.dev/icons?i=nest" alt="NestJS"> NestJS (Backend Framework)
- <img height="20" width="25" src="https://skillicons.dev/icons?i=prisma" alt="Prisma"> Prisma ORM (Database)
- <img height="20" width="25" src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL"> PostgreSQL (Banco de dados)
- <img height="20" width="25" src="https://skillicons.dev/icons?i=ts" alt="TypeScript"> TypeScript

## 📂 Estrutura de Pastas

```
/pasta-raiz-do-projeto
├── prisma/
│   └── schema.prisma         # Schema do banco com Prisma ORM
│
├── src/
│   ├── lib/
│   │   └── prisma.ts         # Instância do PrismaClient
│   │
│   ├── middlewares/
│   │   └── auth.guard.ts     # Middleware de autenticação com JWT
│   │
│   ├── models/
│   │   ├── auth/             # Cadastro e login de usuários e lojas
│   │   ├── lojas/            # CRUD de lojas
│   │   ├── clientes/         # CRUD de clientes
│   │   ├── produtos/         # CRUD de produtos
│   │   ├── orcamentos/       # Criação e aprovação de orçamentos
│   │   └── financeiro/       # Entradas e saídas financeiras por loja
│   │
│   ├── app.module.ts         # Módulo principal da aplicação
│   └── main.ts               # Arquivo de bootstrap da aplicação
│
├── .env                      # Variáveis de ambiente (como DATABASE_URL)
└── README.md
```

## 🚀 Começando

### 1. Clonar o repositório

```bash
git clone https://github.com/Ameglebm/TesteMultT.git
cd TesteMultT
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o banco de dados

Configure o arquivo `.env` com a sua URL de conexão do banco (PostgreSQL, SQLite, etc):

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
JWT_SECRET="sua_chave_jwt"
```

### 4. Rodar as migrações e iniciar o projeto

```bash
npx prisma migrate dev
npm run start:dev
```

## 🔢 Scripts disponíveis

```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run start:prod

# Rodar testes
npm run test

# Testes E2E
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 🗕️ Funcionalidades principais

- Cadastro e login com JWT
- CRUD de lojas, produtos e clientes
- Orçamentos com produtos/serviços e aprovação
- Controle financeiro (entradas e saídas)
- Relatórios de estoque e financeiro
- Middleware de autenticação com proteção por loja

## 📦 Deploy

Esse projeto pode ser deployado em qualquer ambiente Node (Heroku, Vercel com Docker, Railway etc.).
Atualmente está rodando localmente com banco de dados PostgreSQL hospedado no Railway.
Recomendação: usar PostgreSQL em produção.

## 📦 Módulos Principais

| Módulo        | Descrição                                      | Endpoints Principais             |
|---------------|-----------------------------------------------|----------------------------------|
| **Auth**      | Autenticação JWT e gestão de usuários         | `/auth/login`, `/auth/register`  |
| **Lojas**     | CRUD de lojas (apenas SuperAdmin)             | `/lojas`, `/lojas/:id`           |
| **Produtos**  | Gestão de produtos e estoque                  | `/produtos`, `/produtos/estoque` |
| **Clientes**  | Cadastro e histórico de clientes              | `/clientes`, `/clientes/historico`|
| **Orçamentos**| Criação e aprovação de orçamentos             | `/orcamentos`, `/orcamentos/aprovar` |
| **Financeiro**| Controle de entradas/saídas e relatórios      | `/financeiro`, `/financeiro/relatorio` |

## 🚧 Autor

- Nome: **Alisson**
- GitHub: [Ameglebm](https://github.com/Ameglebm)
- Email: [ameglevr@gmail.com](mailto:ameglevr@gmail.com)

## ⚖️ Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

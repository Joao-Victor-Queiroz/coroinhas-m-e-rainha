<h1 align="center">🕊️ Coroinhas-MR (Gerenciador de Coroinhas)</h1>

<p align="center">
  Uma aplicação web desenvolvida para facilitar o registro e o acompanhamento da frequência de coroinhas em formação.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

## 📌 Sobre o Projeto

O **Coroinhas-MR** nasceu da necessidade de modernizar e simplificar a gestão de coroinhas (servidores do altar) em fase de formação. Antes gerenciado de forma exaustiva através de planilhas complexas, agora o processo conta com um sistema dedicado, rápido e de fácil consulta.

O principal objetivo é proporcionar uma interface amigável para registrar novos coroinhas e acompanhar detalhadamente suas frequências nos encontros e atividades, substituindo controles manuais por uma solução automatizada e segura.

## ✨ Funcionalidades

- **Cadastro de Coroinhas:** Registro detalhado com informações pessoais e de contato.
- **Controle de Frequência:** Marcação de presença/falta de forma ágil para cada encontro ou formação.
- **Consulta Rápida:** Visualização clara do histórico e status de cada participante.
- **Interface Intuitiva:** Design focado na experiência do usuário para facilitar a adoção por qualquer pessoa, independente de conhecimento técnico.

## 🚀 Tecnologias e Arquitetura

Este projeto foi construído utilizando as ferramentas mais modernas do ecossistema web, focado em performance, tipagem estática e simplicidade arquitetural:

- **[Next.js 15 (App Router)](https://nextjs.org/):** Framework React utilizado para construção da interface e lógica de servidor.
- **[Supabase](https://supabase.com/):** Utilizado como banco de dados (PostgreSQL) e provedor de autenticação.
- **Arquitetura Integrada (Sem API Externa):** Graças aos *Server Components* e *Server Actions* do Next.js, as chamadas ao banco de dados (Supabase) são feitas diretamente na camada servidora do Next.js. Isso dispensou a necessidade de criar e manter uma API externa separada, reduzindo a complexidade e acelerando o desenvolvimento.
- **[Tailwind CSS](https://tailwindcss.com/):** Para estilização rápida, responsiva e consistente.
- **[shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/):** Componentes de interface acessíveis e customizáveis.
- **[TypeScript](https://www.typescriptlang.org/):** Garantindo segurança e previsibilidade no código através da tipagem estática.

## 🛠️ Decisões de Engenharia

1. **Server-first:** Identificar uma dor (uso exaustivo de planilhas) e propor uma solução de software completa.
2. **Performance no Client:** Toda a lógica de filtragem e busca de coroinhas é processada no lado do cliente, aproveitando o baixo volume de dados inicial para entregar uma experiência de busca instantânea.
3. **Boas práticas de UI/UX:** A escolha do shadcn/ui não foi apenas estética; utilizei a biblioteca para garantir que componentes complexos (como modais de frequência e formulários de cadastro) sigam padrões de acessibilidade (WAI-ARIA).
4. **Gestão de Banco de Dados e BaaS:** Integração direta com um banco relacional (PostgreSQL via Supabase), lidando com modelagem de dados para cadastros e relacionamentos de frequência.

## 💻 Como rodar o projeto localmente

Siga os passos abaixo para testar a aplicação na sua máquina:

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/en/) (versão 18+ recomendada)
- Gerenciador de pacotes (npm, yarn, pnpm ou bun)
- Uma conta no [Supabase](https://supabase.com/) (para o banco de dados)

### 2. Clonando o repositório
```bash
git clone https://github.com/Joao-Victor-Queiroz/coroinhas-m-e-rainha.git
cd coroinhas-mr
```

### 3. Configurando as Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto e preencha com as suas credenciais do Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_do_supabase
```

### 4. Instalando dependências e iniciando
```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.


## 👨‍💻 Autor

Desenvolvido por **João Victor Queiroz** - [GitHub](https://github.com/Joao-Victor-Queiroz)

# Econverse - E-commerce Front-end Test

Este é o projeto de teste front-end para a Econverse, focado em criar uma interface de e-commerce responsiva e *pixel-perfect* seguindo o design do Figma.

## Tecnologias Utilizadas
- React 19
- TypeScript
- Vite
- SCSS / Sass

## Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina (versão 18 ou superior recomendada).

## Instruções de Instalação

1. Clone o repositório ou faça o download dos arquivos.
2. Acesse a pasta do projeto no terminal:
   ```bash
   cd teste-front-end
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Como Rodar o Projeto (Desenvolvimento)
Para iniciar o servidor local de desenvolvimento com Hot Module Replacement (HMR):
```bash
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

## Como Compilar (Build)
Para gerar os arquivos otimizados para produção:
```bash
npm run build
```
Isso criará uma pasta `dist` com os arquivos minificados prontos para deploy.

## Como Testar a Build Localmente
Após realizar o build, você pode visualizar a versão de produção localmente com:
```bash
npm run preview
```

## Linter e Verificação de Código
Para rodar o ESLint e verificar se há erros de formatação ou de código:
```bash
npm run lint
```

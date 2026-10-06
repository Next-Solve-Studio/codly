# Codly

Plataforma gamificada para aprender programação em lições curtas — trilhas de **SQL** e **JavaScript**, com XP, sequência diária, progresso por curso e planos Demo / Básico / Pro.

> Codly Tecnologia Educacional LTDA. Mascote: **Kapy**, a capivara da programação.

## Stack

Front-end web responsivo com base compartilhada para Android/iOS via Capacitor (a integrar). Autenticação planejada com Google + Supabase Auth; dados de curso/progresso em Firebase Firestore via API própria (Node.js).

## Dependências instaladas (`package.json`)

### dependencies

| Pacote | Versão | Para que serve |
|---|---|---|
| `next` | `16.4.0` | Framework React (App Router, build, rotas, SSR/SSG) |
| `react` | `19.3.0` | Biblioteca de UI |
| `react-dom` | `19.3.0` | Renderização do React no DOM |
| `@emotion/react` | `^11.14.0` | CSS-in-JS, engine de estilos usada pelo MUI |
| `@emotion/styled` | `^11.14.1` | API `styled()` do Emotion |
| `@mui/material` | `^9.4.0` | Biblioteca de componentes prontos (Material UI) |
| `motion` | `^14.0.0` | Animações (Framer Motion) |
| `react-icons` | `^5.7.0` | Pacote de ícones (Font Awesome, Feather, etc. como componentes) |
| `swiper` | `^14.3.0` | Carrossel/slider de conteúdo |
| `typewriter-effect` | `^2.22.0` | Efeito de texto "digitando" |

### devDependencies

| Pacote | Versão | Para que serve |
|---|---|---|
| `typescript` | `^5` | Tipagem estática |
| `@types/node` | `^20` | Tipos do Node.js |
| `@types/react` | `^19` | Tipos do React |
| `@types/react-dom` | `^19` | Tipos do React DOM |
| `tailwindcss` | `^4` | Framework CSS utilitário |
| `@tailwindcss/turbopack` | `^4` | Integração do Tailwind v4 com o Turbopack (bundler do Next) |
| `@biomejs/biome` | `2.4.2` | Linter e formatter (substitui ESLint + Prettier) |
| `babel-plugin-react-compiler` | `1.0.0` | React Compiler — memoização automática de componentes |

> Nenhuma lib de autenticação/backend (Supabase, Firebase) ou do Capacitor está instalada ainda — entra conforme o cronograma do escopo (semanas 1–2 em diante).

## Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| Primária | `#7C3AED` | Ações e progresso |
| Primária escura | `#5B21B6` | Ativos e títulos |
| Lavanda | `#EDE9FE` | Cards e seleção |
| Claro | `#F8F7FF` | Fundo (tema claro) |
| Escuro | `#0F0B1A` | Fundo (tema escuro) |
| Superfície escura | `#1A1330` | Cards (tema escuro) |

Suporte nativo a tema claro/escuro.

## Getting Started

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento (Next.js) |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | Lint com Biome |
| `npm run format` | Formata o código com Biome |

## Estrutura

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
public/
```

## Escopo do MVP

- Login/cadastro com Google (Supabase Auth + Firebase)
- Trilhas de SQL e JavaScript (Iniciante, Intermediário, Avançado/Pro)
- Exercícios: múltipla escolha, completar código, ordenar trechos, prever saída, desafios guiados
- XP, sequência diária, metas, progresso por curso
- Período demo (7 dias, conteúdo iniciante) + planos Básico e Pro
- Amigos e ranking por XP
- Landing page, tema claro/escuro, PWA instalável, apps Android/iOS via Capacitor

Prazo: 3 meses / 12 semanas · Equipe: 2 desenvolvedores · Modelo: Micro SaaS.


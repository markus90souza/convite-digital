
## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com)

## Executando o projeto

1. Clone the repositorio

   ```bash
   git clone https://github.com/sadmann7/skateshop.git
   ```

2. Instale as dependências

   ```bash
   npm install
      # ou
   yarn add
      # ou
   pnpm install
      # or
   bun install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

5. Push the database schema

   ```bash
   pnpm run db:push
   ```

6. Start the Stripe webhook listener

   ```bash
   pnpm run stripe:listen
   ```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

# Next.js Starter App

A minimal Next.js 16+ starter template with TypeScript, Tailwind CSS, Prisma, and essential UI components.

---

## Meta

- **App Name:** Next.js App
- **Description:** Modern Next.js starter with TypeScript, Tailwind CSS, Prisma, and UI components.
- **Author:** sh4vyar

---

## Features

- ⚡ Next.js 16+ with App Router
- 📝 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧩 Shadcn UI components
- 🎯 ESLint and Prettier configured
- 🔧 PostCSS configured
- 📚 Prisma + PostgreSQL for database
- 🌙 Dark mode support with `next-themes`

---

## Prerequisites

- Node.js 18+
- [Bun](https://bun.sh) (recommended) or npm

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/sh4vyar/basic-nextjs-starter.git
cd basic-nextjs-starter
```

2. **Install dependencies**

```bash
bun install
```

3. **Run development server**

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                 # Next.js App directory
│   ├── globals.css      # Global CSS
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── provider.tsx    # Context providers
├── lib/                 # Utilities and helpers
└── assets/              # Static assets (images, fonts, etc.)
prisma/
├── schema.prisma        # Prisma schema
```

---

## Scripts

| Command               | Description               |
| --------------------- | ------------------------- |
| `bun dev`             | Start development server  |
| `bun build`           | Build production app      |
| `bun start`           | Start production server   |
| `bun lint`            | Run ESLint                |
| `bun lint:fix`        | Auto-fix lint issues      |
| `bun format`          | Format code with Prettier |
| `bun prisma:generate` | Generate Prisma client    |
| `bun prisma:migrate`  | Run database migrations   |
| `bun prisma:studio`   | Open Prisma Studio        |

---

## Database Setup (Prisma + PostgreSQL)

1. Create `.env.local` file in root:

```env
DATABASE_URL="postgresql://postgres@localhost:5432/db_name"
```

2. Run migrations:

```bash
bun prisma:migrate dev or reset then dev :)
```

3. Generate Prisma client:

```bash
bun prisma:generate
```

---

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Commit (`git commit -m "Add my feature"`)
5. Push (`git push origin feature/my-feature`)
6. Open a Pull Request

# Basic Next.js Starter

A minimal Next.js starter template with TypeScript, Tailwind CSS, and essential UI components.

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sh4vyar/basic-nextjs-starter.git
cd basic-nextjs-starter
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ⚡ Next.js 14+ with App Router
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🧩 Reusable UI components
- 🎯 ESLint configuration
- 🔧 PostCSS configuration

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # UI components
│   └── provider.tsx   # Context providers
├── lib/               # Utility functions
└── assets/            # Static assets
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

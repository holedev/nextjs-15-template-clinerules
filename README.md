# Next.js TypeScript Template with Shadcn UI

A modern Next.js project template featuring TypeScript, Shadcn UI, and best practices for building scalable web applications.

## Features

- ⚡ [Next.js App Router](https://nextjs.org/docs/app) for optimal performance and routing
- 🎨 [Shadcn UI](https://ui.shadcn.com/) for beautiful, accessible components
- 📝 TypeScript for type safety and better developer experience
- 🚀 Server Components by default for improved performance
- 🔄 API routes with Swagger documentation
- 🎯 ESLint and Prettier for code quality
- 🛠️ Modern project structure following best practices

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with Shadcn UI
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                   # App router directories
│   ├── api/              # API routes with Swagger documentation
│   ├── (routes)/         # App routes and pages
│   └── layout.tsx        # Root layout
├── components/           # Shared components
│   └── ui/              # UI components
├── lib/                  # Utilities and helpers
└── public/              # Static assets
```

## Best Practices

### Components
- Use Server Components by default
- Mark client components explicitly with 'use client'
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Implement proper error boundaries

### Performance
- Optimize images with WebP format and proper sizing
- Minimize use of useEffect and setState
- Favor Server Components (RSC) where possible
- Implement proper caching strategies

### API Routes
- Include Swagger documentation for all API routes
- Implement proper error handling
- Use appropriate HTTP methods and status codes

### Forms and Validation
- Use Zod for form validation
- Implement server-side validation
- Handle form errors appropriately
- Show loading states during form submission

### State Management
- Minimize client-side state
- Use React Context sparingly
- Prefer server state when possible
- Implement proper loading states

## Development Guidelines

1. **Branching:**
   - Main branch for production
   - Dev branch for development
   - Feature branches for new features

2. **Commit Messages:**
   - Use clear, descriptive commit messages
   - Follow conventional commits format

3. **Code Style:**
   - Follow ESLint and Prettier configurations
   - Use TypeScript's strict mode
   - Document complex logic with comments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Technical Context

## Technologies Used

### Core Technologies
1. **Next.js 15**
   - App Router
   - Server Components
   - Server Actions
   - Image Optimization
   - API Routes

2. **TypeScript**
   - Strict Mode
   - Type Safety
   - ESLint Integration
   - Type Definitions

3. **Shadcn UI**
   - Component Library
   - Tailwind CSS
   - Radix UI Primitives
   - Custom Theming

### Development Tools
1. **Package Management**
   - pnpm (preferred over npm)
   - Workspace Management
   - Dependencies Resolution
   - Lock File Maintenance

2. **Code Quality**
   - ESLint
   - Prettier
   - TypeScript Compiler
   - Editor Config

3. **Version Control**
   - Git
   - Conventional Commits
   - Branch Management
   - Rebase Workflow

## Development Setup

### Prerequisites
- Node.js (v20)
- pnpm
- Git
- Visual Studio Code (recommended)

### Environment Configuration
```bash
# Required environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Installation Steps
```bash
# Clone repository
git clone [repository-url]

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Technical Constraints

### 1. Server Components
- Default to server components
- Client components must be explicitly marked
- Proper suspense boundaries required
- Loading states implementation

### 2. API Development
- RESTful principles
- Swagger documentation required
- Type-safe endpoints
- Proper error handling

### 3. Performance Requirements
- Core Web Vitals optimization
- Image optimization
- Code splitting
- Proper caching

### 4. Security Constraints
- No sensitive data in client
- Environment variables for secrets
- Proper authentication
- Input validation

## Dependencies

### Production Dependencies
```json
{
  "next": "^15",
  "react": "^19",
  "react-dom": "^19",
  "shadcn": "latest"
}
```

### Development Dependencies
```json
{
  "@typescript-eslint/eslint-plugin": "^6.0.0",
  "@typescript-eslint/parser": "^6.0.0",
  "@tailwindcss/postcss": "^4",
  "@types/react": "^19",
  "@types/node": "^20",
  "eslint": "^9",
  "prettier": "^3",
  "typescript": "^5",
  "tailwindcss": "^4",
}
```

## Build and Deployment

### Build Process
```bash
# Production build
pnpm build

# Start production server
pnpm start
```

### Deployment Requirements
- Node.js environment
- Environment variables configured
- Build artifacts deployment
- Static asset handling

## Monitoring and Maintenance

### Performance Monitoring
- Core Web Vitals tracking
- Error monitoring
- API performance metrics
- Client-side performance

### Updates and Maintenance
- Regular dependency updates
- Security patches
- Performance optimization
- Documentation updates
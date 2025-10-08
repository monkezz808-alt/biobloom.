# BioBloom Agricultural AI Platform

## Overview

BioBloom is an AI-powered agricultural platform designed specifically for Indian farmers. The platform aims to increase crop yields by up to 45% through smart agricultural intelligence, combining modern AI technology with trust-building agricultural aesthetics. The application features multilingual support (English, Hindi, Kannada) and provides various AI-driven tools including crop rotation planning, waste management, pest control, veterinary AI, blockchain traceability, and comprehensive farm dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Framework & Build Tools:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and data fetching

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Design system follows "new-york" style variant
- Theme system supporting light/dark modes via context provider
- Responsive design with mobile-first approach

**Internationalization:**
- i18next for multilingual support (English, Hindi, Kannada)
- Custom font loading for Devanagari and Kannada scripts
- Language preferences persisted in localStorage

**Styling Approach:**
- Custom CSS variables for theming (HSL color space)
- Agricultural-focused color palette (primary green, earth tones, accent orange)
- Consistent spacing system using Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Hover and active state elevations for interactive feedback
- Typography: Inter for body text, Poppins for headings

### Backend Architecture
**Server Framework:**
- Express.js as the Node.js web server
- TypeScript for type safety throughout the stack
- ESM module system

**Database Layer:**
- Drizzle ORM for type-safe database operations
- Neon serverless PostgreSQL as the database provider
- Schema-first approach with shared types between client and server

**Authentication System:**
- Replit Auth using OpenID Connect (OIDC)
- Passport.js strategy for authentication flow
- Session management with connect-pg-simple (PostgreSQL session store)
- 7-day session TTL with secure, httpOnly cookies

**API Design:**
- RESTful endpoints under `/api` prefix
- Request/response logging middleware for debugging
- Centralized error handling with appropriate HTTP status codes

### Data Storage Solutions
**Primary Database:**
- PostgreSQL (Neon serverless) for persistent data storage
- Tables include:
  - `users`: User profile data from authentication
  - `sessions`: Server-side session storage for Replit Auth

**ORM Configuration:**
- Drizzle ORM with PostgreSQL dialect
- Type-safe schema definitions in shared directory
- Migration support via drizzle-kit

**Client-side Caching:**
- TanStack Query for server state caching
- Infinite stale time with manual refetching strategy
- Custom query functions with 401 handling

### Authentication and Authorization
**Authentication Flow:**
- Replit OIDC provider integration
- OAuth 2.0 authorization code flow
- Token refresh mechanism with memoized OIDC configuration
- User profile data synchronized with local database

**Session Management:**
- Server-side sessions stored in PostgreSQL
- Session secret from environment variables
- Automatic session cleanup via TTL

**Authorization Pattern:**
- `isAuthenticated` middleware for protected routes
- User context available in request object after authentication
- Conditional routing based on authentication state

### External Dependencies

**Third-party Services:**
- Replit Authentication (OIDC provider)
- Neon Database (serverless PostgreSQL hosting)
- Google Fonts (Inter, Poppins, Noto Sans Devanagari/Kannada)

**Key NPM Packages:**
- @neondatabase/serverless: Database driver
- drizzle-orm & drizzle-kit: ORM and migration tools
- openid-client: OIDC authentication
- passport: Authentication middleware
- express-session: Session management
- @tanstack/react-query: Data fetching and caching
- react-i18next: Internationalization
- wouter: Routing
- @radix-ui/*: Headless UI primitives
- lucide-react: Icon library

**Development Tools:**
- @replit/vite-plugin-*: Development experience plugins
- tsx: TypeScript execution
- esbuild: Production bundling

**Environment Variables Required:**
- DATABASE_URL: PostgreSQL connection string
- SESSION_SECRET: Session encryption key
- REPL_ID: Replit environment identifier
- ISSUER_URL: OIDC provider URL (defaults to replit.com/oidc)
- REPLIT_DOMAINS: Allowed domains for authentication
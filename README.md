# notes_fe

A full-stack note-taking application built with React and a FastAPI backend. Supports personal note management with search, pagination, and a public explore feed. Includes JWT authentication, Google OAuth, and a responsive masonry layout.

---

## Features

- **Notes CRUD** — create, edit, and delete notes with title, content, tags, and optional image
- **Search & filter** — real-time query with tag filtering across all notes
- **Public / private visibility** — share notes to the explore feed or keep them private
- **Masonry layout** — responsive card grid that adapts from 1 to 4 columns
- **Pagination** — server-side pagination with configurable page size
- **Authentication** — JWT with automatic refresh token handling; Google OAuth supported
- **Password reset** — email-based reset flow
- **Theme** — light / dark mode persisted to localStorage
- **Animations** — entry/exit transitions via Anime.js and Framer Motion

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 18 |
| Routing | React Router v6 (data router with loaders) |
| Styling | TailwindCSS + ShadcnUI (Radix UI) |
| HTTP client | Axios with request/response interceptors |
| Forms | React Hook Form |
| Animations | Anime.js, Framer Motion |
| Notifications | Sonner |
| Icons | Lucide React |
| Build tool | Vite |
| Linter | ESLint |

---

## Project Structure

```
src/
├── api/                 # HTTP layer — thin class wrappers around API endpoints
│   ├── auth/            # Login, logout, OAuth, password reset, user CRUD
│   ├── notes/           # Notes CRUD and pagination
│   └── register/        # Registration endpoint
│
├── services/            # Business logic and shared utilities
│   └── common/          # Token and user session helpers (localStorage)
│
├── interceptor/         # Axios instance with token refresh and auth logic
│
├── routes/              # Page-level components with React Router loaders
│
├── components/          # UI components
│   ├── ui/              # ShadcnUI base components
│   ├── layout/          # Header and footer
│   ├── dialogs/         # Modal dialogs for CRUD and user management
│   └── theme/           # Theme selector
│
├── context/             # React context providers (theme)
├── config/              # Route configuration
└── lib/                 # Shared utilities (error helpers, animations, cn)
```

---

## Getting Started

**Prerequisites:** Node.js 18+, a running instance of the [Notez API](https://github.com/AlbertoBarrago/notes_be).

```bash
# Clone the repository
git clone https://github.com/albertobarrago/notes-card.git
cd notes-card

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Fill in the values — see Environment Variables below

# Start the development server
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_DEV_BASE_URL=http://localhost:8000/api/v1
VITE_PROD_BASE_URL=https://your-backend.railway.app/api/v1
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
VITE_NOTIFIER_DURATION_SECONDS=1100
```

---

## Scripts

```bash
npm run dev            # Start Vite dev server
npm run build          # Production build
npm run preview        # Preview production build locally
npm run lint           # Run ESLint
npm run deploy         # Deploy via Railway CLI
npm run version:patch  # Bump patch version
npm run version:minor  # Bump minor version
npm run version:major  # Bump major version
```

---

## Backend

This frontend connects to a FastAPI backend. Source: [albertobarrago/notes-be](https://github.com/albertobarrago/notes-be).

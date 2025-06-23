# TypeScript Project Template

A clean and simple TypeScript project template with essential development tools and best practices.

## Features

- 🚀 **TypeScript** - Type safety with CommonJS modules
- 📦 **ESLint** - Code linting with TypeScript support and Prettier integration
- 🎨 **Prettier** - Code formatting with ESLint integration
- 🐶 **Husky** - Modern git hooks for code quality
- 🧪 **Jest** - Testing framework with TypeScript support
- 📝 **Commitlint** - Enforces conventional commit message format
- ⚡ **tsx** - Fast TypeScript execution for development
- 🔧 **@tsconfig/node22** - Optimized TypeScript configuration for Node.js 22

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd your-project

# Install dependencies
npm install

# Start development
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with tsx
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Run compiled JavaScript
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Check code for linting issues
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Check TypeScript types without building

## Project Structure

```
├── src/                 # Source code
│   └── index.ts         # Main entry point with demo functions
├── tests/               # Test files
│   └── index.test.ts    # Jest tests for main functions
├── .husky/              # Git hooks
│   ├── pre-commit       # Runs lint-staged before commits
│   └── commit-msg       # Validates commit message format
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── .npmrc               # npm configuration
├── .nvmrc               # Node.js version specification
├── .prettierignore      # Prettier ignore rules
├── .prettierrc          # Prettier formatting configuration
├── commitlint.config.js # Commitlint configuration for conventional commits
├── eslint.config.js     # ESLint configuration with Prettier
├── jest.config.js       # Jest testing configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts (includes lint-staged config)
├── package-lock.json    # Locked dependency versions
├── CONTRIBUTING.md      # Contribution guidelines
└── README.md            # Project documentation
```

Note: Additional directories created during development:

- `dist/` - Build output (created after `npm run build`)
- `node_modules/` - Dependencies (created after `npm install`)

## Development Guidelines

- **CommonJS modules** - Uses standard `require`/`module.exports` for simplicity
- **TypeScript strict mode** - Full type checking enabled
- **ESLint flat config** - Modern ESLint 9+ configuration format
- **TypeScript-first linting** - Only lints `.ts` files in `src/` and `tests/`
- **Conventional commits** - Enforced commit message format (feat:, fix:, docs:, etc.)
- **Pre-commit hooks** - Automatic linting, formatting, and commit validation
- **Testing** - Write tests for new features in the `tests/` directory
- **Type safety** - Use TypeScript types throughout

## Commit Message Format

All commit messages must follow the conventional commit format:

- `feat: add new feature` - New features
- `fix: resolve bug` - Bug fixes
- `docs: update documentation` - Documentation changes
- `style: format code` - Code style changes (formatting, etc.)
- `refactor: restructure code` - Code refactoring
- `test: add tests` - Adding or updating tests
- `chore: update dependencies` - Maintenance tasks

## Configuration Details

### TypeScript

- Extends `@tsconfig/node22` with CommonJS overrides
- Module resolution set to `node` for CommonJS compatibility
- Outputs to `dist/` directory preserving source structure
- Strict type checking enabled
- Source maps and declarations generated

### ESLint + Prettier

- ESLint flat config format (required for ESLint 9+)
- TypeScript parser with project awareness
- Prettier integration via `prettier/prettier` rule
- Focuses only on `src/**/*.ts` and `tests/**/*.ts` files
- Ignores build output and configuration files

### Jest

- TypeScript support with `ts-jest`
- CommonJS module format
- Tests located in `tests/` directory
- Coverage collection from `src/` only

### Commitlint

- Enforces conventional commit message format
- Pre-configured with 7 standard types (feat, fix, docs, style, refactor, test, chore)
- Validates message length and format
- Blocks commits with invalid message format

### Husky

- Modern setup with `npx husky init`
- Pre-commit hook runs `lint-staged`
- Commit-msg hook validates commit message format
- Lint-staged configuration embedded in `package.json`

## Example Usage

The template includes sample mathematical and utility functions with comprehensive tests:

```bash
# Run the demo
npm run dev

# Run tests
npm test

# Build and run
npm run build
npm start

# Commit with proper format (required)
git add .
git commit -m "feat: add new mathematical functions"
```

## Requirements

- Node.js 22.0.0 or higher
- npm 10.0.0 or higher

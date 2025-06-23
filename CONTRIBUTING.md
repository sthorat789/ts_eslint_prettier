# Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Development Workflow

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint:fix`
5. Commit your changes using conventional commits
6. Push and create a pull request

## Commit Messages

We use [Conventional Commits](https://conventionalcommits.org/) for commit messages:

* `feat: add new feature`
* `fix: resolve bug`
* `docs: update documentation`
* `style: format code`
* `refactor: restructure code`
* `test: add tests`
* `chore: update dependencies`

## Code Style

* Use TypeScript for all new code
* Follow the existing ESLint and Prettier configurations
* Write tests for new features
* Keep functions small and focused
* Use meaningful variable names

## Pull Request Process

1. Update documentation if needed
2. Add tests for new functionality
3. Ensure all tests pass
4. Update CHANGELOG.md if applicable
5. Request review from maintainers

## Questions?

Feel free to open an issue for questions or discussions.

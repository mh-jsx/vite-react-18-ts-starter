# Project Setup Guide

Welcome to the React Starter repository! This guide will help you set up the project for development and provide details on scripts, tools, and conventions used in the repository. Follow the steps carefully to get started.

---

## Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js**: The project requires Node.js v20.11.0. You can use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions.
  ```bash
  nvm install
  nvm use
  ```
- **npm**: Comes bundled with Node.js. Ensure it's up-to-date:
  ```bash
  npm install -g npm@latest
  ```
- **Git**: Required for version control. [Download Git](https://git-scm.com/downloads) if not already installed.

---

## Installation

1. **Clone the Repository**
   Open your terminal and clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**
   Install all required dependencies:

   ```bash
   npm install
   ```

3. **Start the Development Server**
   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:5173` by default (or another port if specified).

---

## Project Scripts

Below are the common scripts available in the repository:

- **Development Server**

  ```bash
  npm run dev
  ```

  Starts the Vite development server.

- **Build for Production**

  ```bash
  npm run build
  ```

  Builds the project for production. Output files will be in the `dist` directory.

- **Preview Build**

  ```bash
  npm run preview
  ```

  Serves the production build locally.

- **Linting**

  ```bash
  npm run lint
  ```

  Runs ESLint to check for code issues.

- **Fix Linting Issues**

  ```bash
  npm run lint:fix
  ```

  Attempts to automatically fix linting issues.

- **Prettier Check**

  ```bash
  npm run prettier
  ```

  Checks for formatting issues.

- **Prettier Fix**

  ```bash
  npm run prettier:fix
  ```

  Automatically fixes formatting issues.

- **Commit Changes**

  ```bash
  npm run commit
  ```

  Launches an interactive prompt to structure your commit messages using `commitizen`.

- **Release Version**
  ```bash
  npm run release
  ```
  Creates a new version of the project using `standard-version`.

---

## Project Conventions

### 1. **Code Style**

- The project follows **Airbnb's ESLint rules** with additional TypeScript support.
- Formatting is handled by **Prettier**.

### 2. **Git Commit Guidelines**

- This repository uses **Commitizen** for structured commit messages. Always use:
  ```bash
  npm run commit
  ```
- Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

### 3. **Lint-Staged**

- Pre-commit hooks are configured using **Husky** and **lint-staged**.
- Code is automatically linted and formatted on each commit.

---

## Tooling

### 1. **Vite**

- The project uses [Vite](https://vitejs.dev/) as the build tool for faster development and optimized production builds.

### 2. **TypeScript**

- TypeScript is used to ensure type safety across the project.

### 3. **Husky**

- Husky is configured to run pre-commit and pre-push hooks for linting and testing.

### 4. **Semantic Release**

- Used for automated versioning and changelog generation.

---

## Troubleshooting

1. **Node.js Version Issues**

   - Use the correct Node.js version by running:
     ```bash
     nvm use
     ```

2. **Port Already in Use**

   - If the default port is busy, Vite will use the next available port. Check the terminal output for the exact URL.

3. **Dependency Issues**
   - Run the following to ensure a clean install:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```

---

## Development Workflow

1. **Pull the Latest Changes**
   Before starting your work, always pull the latest changes:

   ```bash
   git pull origin main
   ```

2. **Create a New Branch**
   Use a meaningful name for your branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Commits**
   Use `npm run commit` to ensure commit messages follow the standard.

4. **Push Changes**
   Push your branch to the remote repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   Create a pull request for review.

---

## Contribution Guidelines

- Write clean, modular, and reusable code.
- Ensure all tests pass before pushing changes.
- Adhere to the commit message guidelines.

---

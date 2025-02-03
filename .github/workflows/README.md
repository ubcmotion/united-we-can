# Code Quality Pipeline

## Overview

This pipeline ensures that all code follows best practices before merging into the `main` branch. It enforces:

- **Conventional Commits**: Ensures commit messages follow a standard format.
- **Linting**: Runs ESLint and Prettier to check and format code.
- **Testing**: Executes unit tests with coverage reporting.

## Running Locally

To verify code before making a PR:

1. **Check commit messages** (ensure they follow `feat`, `fix`, `refactor`, `chore`):

   ```sh
   npx webiny/action-conventional-commits@v1.3.0
   ```

2. **Run linters and formatters**:

   For web:

   ```sh
   npm run format:web
   npm run lint:web
   ```

   For mobile: 

   ```
   npm run format:mobile
   npm run lint:mobile
   ```

3. **Run tests**:

   For web:

   ```sh
   cd apps/web/web
   npm test -- --coverage
   ```

   For mobile: 

   ```
   cd apps/mobile/mobile
   npm test
   ```

## GitHub Actions Workflow

### Triggers

This pipeline runs on:

- \*\*Pushes to \*\***`main`**
- \*\*Pull requests to \*\***`main`**

### Jobs

#### 1. Conventional Commits

Ensures commit messages follow the standard format.

Format can be found here: [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)

#### 2. Linting and Formatting

Runs ESLint and Prettier for both web and mobile.

Prettier formats the code, and ESLint checks that 

#### 3. Testing with Coverage

Runs unit tests and uploads coverage reports.
